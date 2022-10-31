import responsive from "/assets/features/desktop/responsive.svg";
import noLimit from "/assets/features/desktop/no-limit.svg";
import embed from "/assets/features/desktop/embed.svg";
import Image from "next/image";

const PSFeatures = () => {
  return (
    <section className="max-w-[1110px] h-[236px] flex fle-row items-center gap-[30px] mx-auto mt-[120px] mb-[120px]">
      <div className="max-w-[350px] flex flex-col gap-[48px] justify-center items-center">
        <Image
          className="w-[72px] h-[72px]"
          src={responsive}
          alt="100% Responsive"
          priority
        />

        <div className="h-[116px]">
          <h3 className="mb-[16px] text-center">100% Responsive</h3>
          <p className="ptext text-center text-pure-black/[.6]">
            No matter which the device you’re on, our site is fully responsive
            and stories look beautiful on any screen.
          </p>
        </div>
      </div>

      <div className="max-w-[350px] h-fit flex flex-col gap-[66px] justify-center items-center">
        <Image
          className="mt-[18px] w-[71.95px] h-[35.69px]"
          src={noLimit}
          alt="No Photo Upload Limit"
          priority
        />

        <div className="h-[116px]">
          <h3 className="mb-[16px] text-center">No Photo Upload Limit</h3>
          <p className="ptext text-center text-pure-black/[.6]">
            Our tool has no limits on uploads or bandwidth. Freely upload in
            bulk and share all of your stories in one go.
          </p>
        </div>
      </div>

      <div className="max-w-[350px] flex flex-col gap-[48px] justify-center items-center">
        <Image
          className="w-[71px] h-[72px]"
          src={embed}
          alt="Available to Embed"
          priority
        />

        <div className="h-[116px]">
          <h3 className="mb-[16px] text-center">Available to Embed</h3>
          <p className="ptext text-center text-pure-black/[.6]">
            Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
            videos, Google Maps, and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PSFeatures;
