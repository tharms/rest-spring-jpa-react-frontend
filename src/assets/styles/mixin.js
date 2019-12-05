import { css } from 'styled-components';

const mixin = {
  retinaImage: (image, image2x) => css`
    background-image: url(${image});
    background-size: contain;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${image2x});
    }
  `,
};

export default mixin;
