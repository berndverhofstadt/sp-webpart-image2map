import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle,
  PropertyPaneSlider
} from '@microsoft/sp-webpart-base';

import * as strings from 'ImageMappingWebPartStrings';
import ImageMapping from './components/ImageMapping';
import { IImageMappingProps } from './components/IImageMappingProps';

export interface IImageMappingWebPartProps {
  title: string;
  description: string;
  imageUrl: string;
  imageMap: string;
  imageHighlight: boolean;
  lineWidth: number;
  imageHeight: number;
  imageWidth: number;
  fillColor: string;
  strokeColor: string;
}

export default class ImageMappingWebPart extends BaseClientSideWebPart<IImageMappingWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IImageMappingProps> = React.createElement(
      ImageMapping,
      {
        title: this.properties.title,
        description: this.properties.description,
        imageUrl: this.properties.imageUrl,
        imageMap: (this.properties.imageMap != null && this.properties.imageMap != undefined && this.properties.imageMap != "") ? JSON.parse(this.properties.imageMap) : undefined,//new Object(),
        imageHighlight: this.properties.imageHighlight,
        lineWidth: this.properties.lineWidth,
        imageHeight: this.properties.imageHeight,
        imageWidth: this.properties.imageWidth,
        strokeColor: this.properties.strokeColor,
        fillColor: this.properties.fillColor
      }
    );
    this.context.propertyPane.refresh();
    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('title', {
                  label: strings.TitleFieldLabel,
                }),
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            },
            {
              groupName: strings.ImageGroupName,
              groupFields: [
                PropertyPaneTextField('imageUrl', {
                  label: strings.ImageUrlFieldLabel
                }),
                PropertyPaneSlider('imageWidth', {
                  label: strings.ImageWidthFieldLabel,
                  min: 1,
                  max: 2000,
                  showValue: true,
                  value: 500
                }),
                PropertyPaneSlider('imageHeight', {
                  label: strings.ImageHeightFieldLabel,
                  min: 1,
                  max: 2000,
                  showValue: true,
                  value: 500
                })
              ]
            },
            {
              groupName: strings.ImageMapGroupName,
              groupFields: [
                PropertyPaneTextField('imageMap', {
                  label: strings.ImageMapFieldLabel,
                  resizable: true,
                  multiline: true,
                  rows: 10,
                  placeholder: "e.g.:\r\n{\r\n  \"name\": \"my-map\",\r\n  \"areas\": [\r\n    { \"shape\": \"rect\", \"coords\": [0,0,100,100], \"href\": \"https:\/\/google.com\" },\r\n    { \"shape\": \"circle\", \"coords\": [150,150,50], \"href\": \"https:\/\/google.com\" },\r\n    { \"shape\": \"poly\", \"coords\": [25,33,27,300,128,240,128,94], \"href\": \"https:\/\/google.com\" }\r\n  ]\r\n}"
                }),
                PropertyPaneTextField('fillColor', {
                  label: strings.FillColorFieldLabel,
                  placeholder: "rgba(255, 255, 255, 0.5)",
                  value: "rgba(255, 255, 255, 0.5)"
                }),
                PropertyPaneTextField('strokeColor', {
                  label: strings.StrokeColorFieldLabel,
                  placeholder: "rgba(0, 0, 0, 0.5)",
                  value: "rgba(0, 0, 0, 0.5)"
                }),
                PropertyPaneSlider('lineWidth', {
                  label: strings.LineWidthFieldLabel,
                  min: 0,
                  max: 5,
                  showValue: true,
                  value: 1
                }),
                PropertyPaneToggle('imageHighlight', {
                  label: strings.ImageHighlightToggleLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
