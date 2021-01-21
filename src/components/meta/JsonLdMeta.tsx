import { BlogPosting } from 'schema-dts';
import { jsonLdScriptProps } from 'react-schemaorg';
import config from '../../lib/config';
import Head from 'next/head';

type Props = {
  url: string;
  title: string;
  keywords?: string[];
  date?: Date;
  author?: string;
  image?: string;
  description?: string;
};
export default function JsonLdMeta({
  url,
  title,
  keywords,
  date,
  author,
  image,
  description,
}: Props) {
  return (
    <Head>
      <script
        {...jsonLdScriptProps<BlogPosting>({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          mainEntityOfPage: config.base_url + url,
          headline: title,
          keywords: keywords ? undefined : keywords.join(','),
          datePublished: '21/01/2021',
          author: author,
          image: image,
          description: description,
        })}
      />
    </Head>
  );
}
