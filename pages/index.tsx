import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import TweetEditor from "@/components/tweet-editor";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <TweetEditor />
    </>
  );
}
