import Image from 'next/image'
import Markdown from 'react-markdown'
import rehypePluginSanatize from 'rehype-sanitize'

interface MarkdownContentProps {
  content: string
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => (
  <div className="text-[#404040] w-full flex flex-wrap gap-4">
    <Markdown
      rehypePlugins={[rehypePluginSanatize]}
      components={{
        h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
        p: paragraph => {
          const { node } = paragraph
          const firstChildren = node?.children[0] as any

          if (firstChildren.tagName === 'img') {
            const image = firstChildren
            const metastring = image?.properties.alt
            const alt = metastring?.replace(/ *\{[^)]*\} */g, '')

            return (
              <div
                className="relative w-full h-80 min-[480px]:h-96 sm:h-[420px] md:h-[500px] lg:h-[647px]"
              >
                <Image
                  src={image.properties.src}
                  alt={alt}
                  title={alt}
                  fill
                  sizes="
                    (min-width: 320px) and (max-width: 768px) 300px,
                    (min-width: 769px) and (max-width: 1024px) 400px, 500px
                  "
                />
              </div>
            )
          }

          return <p>{paragraph.children}</p>
        },
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            title="Link reference"
            className="text-neutral-700 hover:text-[#1E9751] border-b-[1px] border-b-[#E5E5E5] transition-all"
          >
            {children}
          </a>
        ),
        ul: ({ children }) => (
          <ul
            className="w-full list-disc pl-5"
          >
            {children}
          </ul>
        ),
        li: ({ children }) => <li className="mb-1">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="pl-4 py-2 my-2 border-s-4 border-[#171717] text-neutral-500 italic">
            {children}
          </blockquote>
        )
      }}
    >
      {content}
    </Markdown>
  </div>
)

export default MarkdownContent
