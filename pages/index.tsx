import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";


const data = [
  {
    "id":1,
    "movieName":'Movie 1'
  },
  {
    "id":2,
    "movieName":'Movie 2'
  }
]
export default function Home() {
  return (
    <>


<Card />

    </>
  );
}
