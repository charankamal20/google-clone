import WebSearchResult from '@/components/webSearchResult';
import Link from 'next/link'

async function WebSearchPage({searchParams}) {

  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`);
  const data = await response.json();
  const results = data.items;

  
  if(!results) {
    return <div className="w-full pt-10 flex flex-col justify-center items-center"> 
      <h1 className="text-lg">No result found</h1>
        <p>Try searching for something else or go back to homepage.</p>
        <Link className="text-blue-500" href="/">
          Home
        </Link>
    </div>
  }
  
  return (
    <>
      {results && <WebSearchResult results={data}/>}
    </>
  );
}

export default WebSearchPage;