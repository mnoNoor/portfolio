import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-slate-100 py-6 md:py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm md:text-base">Follow me on:</p>

        <div className="flex justify-center gap-4 mt-4">
          <SocialLinks platform="github" link="https://github.com/mnoNoor" />
          <SocialLinks
            platform="linkedin"
            link="https://www.linkedin.com/in/mnoNoor/"
          />
          <SocialLinks platform="telegram" link="https://t.me/mnoNoor" />
          <SocialLinks
            platform="instagram"
            link="https://www.instagram.com/mn.3mw/"
          />
        </div>
      </div>
    </footer>
  );
}
