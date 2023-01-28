import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from 'next/link'
import styles from "@/styles/Home.module.css";

import { Landing } from "../components/";

export default function Home() {
  return (
    <div className="mx-8">
      <Landing />
    </div>
  );
}

