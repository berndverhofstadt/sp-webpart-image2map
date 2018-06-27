import * as React from 'react';
import styles from './ImageMapping.module.scss';
import { IImageMappingProps } from './IImageMappingProps';
import { escape } from '@microsoft/sp-lodash-subset';
import ImageMapper from 'react-image-mapper';

export default class ImageMapping extends React.Component<IImageMappingProps, {}> {
  public render(): React.ReactElement<IImageMappingProps> {
    return (
      <div className={styles.imageMapping}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>{escape(this.props.title)}</span>
              {/* <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p> */}
              <p className={styles.description}>{escape(this.props.description)}</p>
              {this.props.imageUrl !== undefined && this.props.imageMap !== undefined &&
                <ImageMapper
                  src={this.props.imageUrl}
                  map={this.props.imageMap}
                  width={this.props.imageWidth}
                  height={this.props.imageHeight}
                  lineWidth={this.props.lineWidth}
                  fillColor={this.props.fillColor}
                  strokeColor={this.props.strokeColor}
                  active={this.props.imageHighlight} />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
