export default function SocialLinks({ platform, link }) {
  return (
    <div className="flex gap-4 mt-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-600 transition text-sm md:text-base"
      >
        {platform}
      </a>
    </div>
  );
}
