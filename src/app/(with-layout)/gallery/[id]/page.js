'use client'
import getOneData from "@/utils/getOneData/getOneData";
import { useParams } from "next/navigation";


const OneProduct =  () => {
  const { id } = useParams();
  const data =  getOneData(id)
  return (
    <div className="container mx-auto px-2 py-5">
      <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
    </div>
  );
}

export default OneProduct;