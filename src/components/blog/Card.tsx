import Datetime from './Datetime';
import type {BlogFrontmatter} from '@content/_schemas';

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
  ogImage?: string;
}

export default function Card({href, frontmatter, secHeading = true}: Props) {
  const {title, published, description, ogImage} = frontmatter;
  console.log(ogImage);
  // const ogUrl = ogImage ? new URL(ogImage).href : null;
  return (
    <li className="relative flex w-full items-center justify-center border-t border-grey-200 pt-10">
      <span className="absolute left-0 top-10">
        {' '}
        <Datetime datetime={published} />
      </span>
      <div className="max-w-3xl">
        <a
          href={href}
          className="inline-block text-lg font-medium text-skin-blog-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        >
          <h3 className="text-4xl font-semibold text-grey-900 hover:underline dark:text-gray-200">
            {title}
          </h3>
          {ogImage && <img src={ogImage}></img>}
        </a>
        <p>{description}</p>
      </div>
    </li>
  );
}
