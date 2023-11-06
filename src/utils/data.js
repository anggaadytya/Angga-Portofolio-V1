import certifBackEnd from "../assets/certificate/certifBackEnd.png";
import certifFrontEnd from "../assets/certificate/certifFrontEnd.png";
import certifDasarWeb from "../assets/certificate/certifDasarWeb.png";
import certifJava from "../assets/certificate/certifJava.png";
import certifC from "../assets/certificate/certifC.png";
import certifCloud from "../assets/certificate/certifCloud.png";
import certifJavascript from "../assets/certificate/certifJavascript.png";
import certifReact from "../assets/certificate/certifReact.png";
import certifPolicy from "../assets/certificate/certifPolicy.png";
import certifNetwork from "../assets/certificate/certifNetwork.png";

import SISPARCABAI from "../assets/projects/SISPARCABAI.png";
import SISPARCABAI2 from "../assets/projects/SisparCabai2.png";
import SISPARCABAI3 from "../assets/projects/SisparCabai3.png";
import SISPARCABAI4 from "../assets/projects/SisparCabai4.png";
import AnggaPorto from "../assets/projects/AnggaPorto.png";
import DashboardGames from "../assets/projects/DashboardGames.png";
import KasApps from "../assets/projects/KasApps.png";
import NotesApp from "../assets/projects/NotesApp.png";
import CarLanding from "../assets/projects/CarLanding.png";
import CarLanding2 from "../assets/projects/CarLanding2.png";

import bootstrap from "../assets/logo/bootstrap.svg";
import css from "../assets/logo/css3.svg";
import framer from "../assets/logo/FrameMotion.svg";
import html from "../assets/logo/html5.svg";
import javascript from "../assets/logo/javaScript.svg";
import mu5 from "../assets/logo/MaterialUI.svg";
import mysql from "../assets/logo/mySQL.svg";
import node from "../assets/logo/nodeJs.svg";
import php from "../assets/logo/php.svg";
import react from "../assets/logo/reactJs.svg";
import reactQuery from "../assets/logo/reactQuery.svg";
import tailwind from "../assets/logo/tailwindCss.svg";
import viteJs from "../assets/logo/viteJs.svg";
import vitest from "../assets/logo/vitest.svg";
import express from "../assets/logo/express.svg"
import nextJs from "../assets/logo/nextjs2.svg";
import typeScript from "../assets/images/typescript.png"

import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export const certifData = [
  {
    img: certifReact,
    title: "Belajar Membuat Aplikasi Web dengan React",
    body: "Dicoding Indonesia",
  },
  {
    img: certifFrontEnd,
    title: "Belajar Membuat Front-End Web untuk Pemula",
    body: "Dicoding Indonesia",
  },
  {
    img: certifDasarWeb,
    title: "Belajar Dasar Pemograman Web",
    body: "Dicoding Indonesia",
  },
  {
    img: certifBackEnd,
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    body: "Dicoding Indonesia",
  },
  {
    img: certifCloud,
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    body: "Dicoding Indonesia",
  },
  {
    img: certifJavascript,
    title: "Belajar Dasar Pemograman JavaScript",
    body: "Dicoding Indonesia",
  },
  {
    img: certifJava,
    title: "Memulai Pemograman Dengan Java",
    body: "Dicoding Indonesia",
  },
  {
    img: certifC,
    title: "Memulai Pemograman Dengan C",
    body: "Dicoding Indonesia",
  },
  {
    img: certifNetwork,
    title: "Network Administrator",
    body: "BNSP",
  },
];

export const projectData = [
  {
    img: [SISPARCABAI, SISPARCABAI2, SISPARCABAI4, SISPARCABAI3],
    label: "FullStack",
    title: "SISPAR-CABAI",
    subtitle:
      "Sistem Pakar Deteksi Hama dan Penyakit Tanaman Cabai menggunakan metode case based reasoning",
    demo: "https://sispar-cabai.vercel.app/",
    code: "https://github.com/anggaadytya/SISPAR-CABAI",
    tech: [mysql, express, react, node, bootstrap, javascript],
  },
  {
    img: [AnggaPorto],
    label: "FrontEnd",
    title: "Angga Porto",
    subtitle: "Portfolio Angga Adytya",
    demo: "https://angga-adytya.vercel.app/",
    code: "https://github.com/anggaadytya/angga_adytya",
    tech: [react, tailwind, viteJs, framer, mu5, javascript],
  },
  {
    img: [DashboardGames],
    label: "FrontEnd",
    title: "Games Dashboard",
    subtitle: "Dashboard Games",
    demo: "https://films-dashboard.vercel.app/",
    code: "https://github.com/anggaadytya/GamesDashboard",
    tech: [react, tailwind, viteJs, javascript],
  },
  {
    img: [KasApps],
    label: "FrontEnd",
    title: "Kas Apps",
    subtitle: "Dashboard Kas",
    demo: "https://kas-apps.vercel.app/",
    code: "https://github.com/anggaadytya/kasApps",
    tech: [react, tailwind, viteJs, javascript],
  },
  {
    img: [NotesApp],
    label: "FrontEnd",
    title: "Notes Apps",
    subtitle: "Dashboard Notes",
    demo: "https://notes-apps-omega.vercel.app/",
    code: "https://github.com/anggaadytya/Submission-React-Notes-Apps",
    tech: [react, css, viteJs, javascript],
  },
  {
    img: [CarLanding, CarLanding2],
    label: "FrontEnd",
    title: "Car Landing Page",
    subtitle: "Landing Page Penjualan mobil",
    demo: "https://landing-page-rust-ten.vercel.app/",
    code: "https://github.com/anggaadytya/Cars-Landing-Page",
    tech: [typeScript, nextJs, tailwind],
  }
];

export const contactData = [
  {
    img: BsGithub,
    name: "Github",
    link: "https://github.com/angga-adytya",
    color: "bg-black",
  },
  {
    img: BsLinkedin,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-angga-adytya/",
    color: "bg-blue-700",
  },
  {
    img: BsInstagram,
    name: "Instagram",
    link: "https://www.instagram.com/angga_adytya/",
    color: "bg-pink-500",
  },
  // {
  //   img: BsFacebook,
  //   name: "Facebook",
  //   link: "https://twitter.com/angga_adytya",
  //   color: "bg-blue-700"
  // }
];
