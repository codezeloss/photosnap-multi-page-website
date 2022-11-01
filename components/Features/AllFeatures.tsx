import Image from "next/image";
import responsive from "../../public/assets/features/desktop/responsive.svg";
import noLimit from "../../public/assets/features/desktop/no-limit.svg";
import embed from "../../public/assets/features/desktop/embed.svg";
import domain from "../../public/assets/features/desktop/custom-domain.svg";
import exposure from "../../public/assets/features/desktop/boost-exposure.svg";
import dragdrop from "../../public/assets/features/desktop/drag-drop.svg";

const AllFeatures = () => {
  return (
    <section className="flex flex-col gap-[104px] 5bp:flex-row 5bp:gap-[11px] 5bp:justify-center 5bp:items-center 5bp:py-[112px]">
      <div className="max-w-[1138.8px] h-[236px] flex fle-row items-center gap-[30px] mx-auto mt-[160px] px-[1.8rem] 5bp:flex-col 5bp:h-[100%] 5bp:mt-0">
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
      </div>

      {/* --------------------------------------------------------- */}
      <div className="max-w-[1138.8px] h-[236px] flex fle-row items-center gap-[30px] mx-auto mb-[160px] px-[1.8rem] 5bp:flex-col 5bp:h-[100%] 5bp:mb-0 5bp:justify-center 5bp:items-center">
        <div className="max-w-[350px] flex flex-col gap-[48px] justify-center items-center">
          <Image
            className="w-[81px] h-[72px]"
            src={domain}
            alt="Custom Domain"
            priority
          />

          <div className="h-[116px]">
            <h3 className="mb-[16px] text-center">Custom Domain</h3>
            <p className="ptext text-center text-pure-black/[.6]">
              With Photosnap subscriptions you can host your stories on your own
              domain. You can also remove our branding!
            </p>
          </div>
        </div>

        <div className="max-w-[350px] h-fit flex flex-col gap-[48px] justify-center items-center">
          <Image
            className="w-[72px] h-[72px]"
            src={exposure}
            alt="Boost Your Exposure"
            priority
          />

          <div className="h-[116px]">
            <h3 className="mb-[16px] text-center">Boost Your Exposure</h3>
            <p className="ptext text-center text-pure-black/[.6]">
              Users that viewed your story or gallery can easily get notifed of
              new and featured stories with our built in mailing list.
            </p>
          </div>
        </div>

        <div className="max-w-[350px] flex flex-col gap-[48px] justify-center items-center">
          <Image
            className="w-[91px] h-[72px]"
            src={dragdrop}
            alt="Drag & Drop Image"
            priority
          />

          <div className="h-[116px]">
            <h3 className="mb-[16px] text-center">Drag & Drop Image</h3>
            <p className="ptext text-center text-pure-black/[.6]">
              Easily drag and drop your image and get beautiful shots everytime.
              No over the top tooling to add friction to creating stories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllFeatures;
