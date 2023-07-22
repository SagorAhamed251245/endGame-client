import SectionTitle from "../../../components/SectionTitle";
import GalleryImg from "./GalleryImg";

const Gallery = () => {
  return (
    <>
      <SectionTitle>GalleryPhotos</SectionTitle>
      <div className="grid grid-cols-2 grid-rows-2 h-[900px] w-9/12 mx-auto gap-5 mt-24 overflow-hidden rounded-xl ">
        <div className="col-span-1   flex  overflow-hidden rounded-xl ">
          <GalleryImg index={0}></GalleryImg>
        </div>

        <div className="col-span-1 grid grid-cols-2 grid-rows-2  w-full  gap-5  overflow-hidden rounded-xl ">
          <div className="col-span-1   flex  overflow-hidden rounded-xl ">
            <GalleryImg index={1}></GalleryImg>
          </div>
          {/* 1 */}
          <div className="col-span-1   flex  overflow-hidden rounded-xl ">
            <GalleryImg index={2}></GalleryImg>
          </div>
          {/* 2 */}
          <div className="col-span-1   flex overflow-hidden rounded-xl ">
            <GalleryImg index={3}></GalleryImg>
          </div>
          {/* 3 */}
          <div className="col-span-1  flex  overflow-hidden rounded-xl ">
            <GalleryImg index={4}></GalleryImg>
          </div>
        </div>

        <div className="col-span-1 grid grid-cols-2 grid-rows-2  w-full  gap-5   overflow-hidden rounded-xl ">
          <div className="col-span-1   flex  overflow-hidden rounded-xl ">
            <GalleryImg index={4}></GalleryImg>
          </div>
          {/* 1 */}
          <div className="col-span-1   flex overflow-hidden rounded-xl ">
            <GalleryImg index={3}></GalleryImg>
          </div>
          {/* 2 */}
          <div className="col-span-1  flex overflow-hidden rounded-xl ">
            <GalleryImg index={2}></GalleryImg>
          </div>
          {/* 3 */}
          <div className="col-span-1  flex  overflow-hidden rounded-xl ">
            <GalleryImg index={1}></GalleryImg>
          </div>
        </div>

        <div className="col-span-1   flex overflow-hidden rounded-xl ">
          <GalleryImg index={5}></GalleryImg>
        </div>
      </div>
    </>
  );
};

export default Gallery;
