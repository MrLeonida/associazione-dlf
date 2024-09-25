import { fetchNewsActualFromFirestore } from "@/app/lib/firestoreNewsActual";

async function getData() {
  const data = await fetchNewsActualFromFirestore();
  return data
};

export default async function HomeAttivita() {

  const posts = await getData()

  if (posts) {

    return (
      
      <section className="bg-white">
        {posts.map((post) => (
            <div key={post.fieldData.idNews} className="grid max-w-screen-xl px-6 lg:px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl text-4xl font-bold tracking-tight leading-none sm:text-6xl text-slate-900">{post.fieldData.title}</h1>
                    <p className="max-w-2xl mt-6 font-md text-slate-700 sm:text-xl">{post.fieldData.subtitle}</p>
                    <div className="mt-10 flex items-center justify-left">
                      <a
                        href={post.fieldData.link}
                        className={"rounded-md " + post.fieldData.categoryColor + " px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:" + post.fieldData.categoryColorSecond + " focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                      >
                        Leggi la news
                      </a>
                  </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" src={post.fieldData.image} />
                </div>                
            </div>
          ))}
      </section>

    )
  
  } else {

    return null

  }

}