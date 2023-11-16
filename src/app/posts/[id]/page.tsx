const BASE_URL = "https://next-app-seven.vercel.app"

//1 function fetchPotst
const fetchPost = async (postId: string) => {
    const post = await fetch(`${BASE_URL}/api/posts/${postId}`, {
        method: "GET"
    })
    return post.json();
}
// 2 . generateMetadata
export async function generateMetadata({params}: any) {
  const { post } = await fetchPost(params.id);

  return {
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: '/',
      languages: {
        'fr-FR': '/fr-FR',
      },
    },
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${BASE_URL}/api/posts/${post.id}`,
      type: "website",
      siteName: `${post.title} | ${BASE_URL}`,
      locale: "fr-FR",
      images: [
        {
          url: `${BASE_URL}${post.image_url}`
        }
      ]
    }
  }
}


export default async function PostID({params}: any) {
  return (
    <div className="page flex gap-3">
      post {params.id}
    </div>
  )
}
