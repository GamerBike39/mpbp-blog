import { FC } from 'react';

interface MdxVideoProps {
 src : string;
}

const MdxVideo: FC<MdxVideoProps> = ({ src }) => {
  return (
    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${src}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
   );
}

export default MdxVideo;