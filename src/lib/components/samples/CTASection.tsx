/* eslint-disable @next/next/no-img-element */
const CTASection = () => {
  return (
    <div className="grid justify-items-center gap-2.5">
      <div className="flex items-center gap-2">
        <a
          className="btn rounded-3xl border-2 border-green-400 bg-gradient-to-br from-gray-100 to-green-200 font-semibold text-green-700 hover:from-gray-200 hover:to-green-200 hover:text-green-800"
          href="https://github.com/sozonome/nextarter-tailwind/generate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Use This Template
        </a>
      </div>
    </div>
  )
}

export default CTASection
