import React from "react";
import Link from "next/link";

const DynamicRoute = async (props: any) => {
    const url = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${props.params.id}`
    );
    const data = await url.json();
    console.log("Single Title Response", data);
  
    
  
    return (
        <div className="bg-gradient-to-br from-blue-500 via-yellow-400 to-pink-500 min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white shadow-xl rounded-lg p-6 border border-yellow-300 max-w-md w-full">
          <h1 className="text-3xl font-bold text-yellow-600 mb-4 text-center">
            Album Details
          </h1>
          <p className="text-gray-700 font-medium mb-2">
            <strong className="text-yellow-500">ID:</strong> {props.params.id}
          </p>
          <p className="text-gray-700 font-medium mb-2">
            <strong className="text-yellow-500">Title:</strong> {data.title}
          </p>
          <p className="text-gray-700 font-medium mb-2">
            <strong className="text-yellow-500">User ID:</strong> {data.userId}
          </p>
          <p className="text-gray-700 font-medium mb-4">
            <strong className="text-yellow-500">Description:</strong> {data.discription}
          </p>
          <Link href="/">
          <button className="w-full bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-500 transition">
            Explore More
          </button>
          </Link>
        </div>
      </div>
      
      
    );
  }
  export default DynamicRoute;
  