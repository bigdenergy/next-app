//1 function fetchPotst
const fetchPost = async (postId: string) => {
    const post = await fetch(`/api/posts/${postId}`, {
        method: "GET"
    })
    return post.json();
}
// 2 . generateMetadata
export const metadata = {

}


export default async function PostID({params}: any) {
  return (
    <div className="page flex gap-3">
      post {params.id}
    </div>
  )
}
