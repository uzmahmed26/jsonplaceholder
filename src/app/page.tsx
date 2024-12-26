import Link from 'next/link';
export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = await url.json();

   
    return (
      <div className="bg-gradient-to-b from-blue-900 via-sky-700 to-pink-500 min-h-screen py-10">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-white hover:text-pink-300 transition-colors duration-300">
        Uzma Ahmed <br /> Roll No# 00448632
      </h1>
      <h1 className="text-4xl font-extrabold text-center mb-8 text-yellow-300 hover:text-yellow-500 hover:scale-105 transition-all duration-300">
        JSON PlaceHolder Albums
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6">
        {albums.map((album: { id: number; title: string }) => (
          <li
            key={album.id}
            className="bg-white shadow-xl rounded-lg p-6 border border-pink-300 hover:shadow-lg hover:shadow-yellow-500 transition-shadow flex flex-col justify-between h-full"
          >
            <h2 className="text-lg font-semibold text-blue-900 text-left mb-4">
              {album.title}
            </h2>
            <Link href={`/${album.id}`}>
              <button className="mt-auto bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
                View Details
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    
    
    
    
    
    );
  }
  