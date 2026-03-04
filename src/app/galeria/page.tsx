"use client";
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { X } from 'lucide-react';


type Photo = {
  url: string;
  title?: string;
  category: 'Folie PPF' | 'Korekta Lakieru' | 'Detailing Wnętrza';
  description?: string;
};

const PHOTOS: Photo[] = [
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Ff2d9cd50c740486bbd615f3c2b8c5de4?format=webp&width=1200', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F7e559bd5f5e44ded856011b8a7375c59?format=webp&width=1200', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Fa044ab9c95c740d09c88d10f26251a4b?format=webp&width=1200', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F341d4c723e93401eb74b941431ad9938?format=webp&width=1200', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F98140beb06aa44bbaff5cd622cb8c562?format=webp&width=1200', category: 'Folie PPF', description: 'Pełne oklejenie BMW Serii 7 bezbarwną folią ochronną PPF.' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F7fc10cae46a64eccb3c9103e089879b8?format=webp&width=1200', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Fbd1823ebf01248feae8c34b461964df6?format=webp&width=1200', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F9c41a590f66f4816935c3f66eb1cd21b?format=webp&width=1200', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F98077ab161f84ccf8de81209b3692c9b?format=webp&width=1200', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F48ab34fa86d24dc8b13cafa312b92ced?format=webp&width=1200', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F4a94853eaa524ae1ae2d2775d5060717?format=webp&width=1200', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F0c92821066bf459593a6b6c870ee94a1?format=webp&width=1200', category: 'Detailing Wnętrza' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Fe1ef7f577be346e1b94cb0ca6c249788?format=webp&width=1200', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F947fad37a98c4ce8a36fae5188c77024?format=webp&width=1200', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Fcfde8d9ef1d244468219f540d0e1f5c1?format=webp&width=1200', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F249e2fcb4e774f429e3d88d0e0724268?format=webp&width=1200', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F8992caa70d3d4cd68f0d83bfb886454e?format=webp&width=1200', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F25b2375a9bab4ba396ded993bf7c6246?format=webp&width=1200', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F0af0f53bcb3c4144b5e43841de57e7ca?format=webp&width=1200', category: 'Folie PPF', description: 'Zmiana połysku na mat poprzez zastosowanie matowej folii ochronnej PPF.' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F1f20971f8a7f4af5a339d3acde244852?format=webp&width=1200', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F9ba2554e8d8b4449a8fe8563807cbfb8?format=webp&width=1200', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F88360512c69d4116bd737a323fc98ebd?format=webp&width=1200', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F1ff55374ce28441ea07ec3833b3fee51?format=webp&width=1200', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F8c92ec60fee24ef1960d751c793b45f2?format=webp&width=1200', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F86bd46d7277b41a1bfc8ec2766679d78?format=webp&width=1200', category: 'Detailing Wnętrza' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Feb768d0f54a149c38cfa4f4a3c68d4ec?format=webp&width=1200', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F6406dbc6483a44a5adc02d6e11c31a49?format=webp&width=1200', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F7737bf2bc8764933a2d6265aeae04c35?format=webp&width=1200', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F21be4eb4fece4ec18f5bfd89ec9ba203?format=webp&width=1200', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Fa6dc5029168a4e239b0efec55b37d94d?format=webp&width=1200', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Fc1efc04e5c1742a7abf325af53eeecae?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Fcee4874372b54b9ba40e80b497cd94e7?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F3780aa6e76eb4223bfacc7d32c2d16e4?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F40287851b01c48d5aae994d8ce6d359a?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Faa7c32891b834f2faf35d07468af505d?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F219791af322d4beba06ece49e51138c1?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Fa837092831a34a0296cc1800fce7e6f9?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F74555b1d3ef34fc68b2784150adce900?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F305398c51ed145d6bc653d19d61483bb?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Ffe77622c9ecd4584a77c6fd0ca09685f?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F4f7e825e84064c4090859742966a9a52?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Fb91f10845c3543a5a50983516d151d27?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F5455547b1644446da41e0bc137f632d7?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F954dd146292848aa9f810fae0d99d778?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Fbdad2ed964434ba38cd1084cd7147f70?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Fd8a71667daaa4fa79b500b2077506220?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Fe9a2ba25548140b994a17a4eeb92cec7?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F5ff38e2415944c72a378800b16e834fe?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F1421f153f5874e309f71c0a8c640349d?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Fb49d2f6a4be34517b6a57feeb69c34a4?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Ff2b087dcfb0f4a9e9471ee213280d8e6?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F8a9e1c48bcca49f3b11f9baf6ee7b366?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F9e852dfa4025421fa10bcc52272e1da6?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa9590f94f2074a58b8f42aff3ed02352%2F10378a813ed741d1973378dca52d80aa?format=webp&width=800', category: 'Folie PPF', description: 'Oklejenie frontu oraz zabezpieczenie newralgicznych miejsc, wykończone powłoką elastomerową.' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fa70409b6c6f74d1f8eef91a32c353e5c?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fc84d14c26d1540b28b19c8254e8bf1d4?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F3224f550a96348368fdaebdf885bd4c4?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F019447af837a4ba48cb381e984b28a19?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Ff3649fc18a9c4b779cd61f0ad72f175c?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F2b87ca567d094c4eb6580b242729a2d8?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fbcb405d0e2ac4c468b47cd765d290e6b?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fd14472ba1cb1466f81e34243834bee9d?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F155662bc2e4d4d4fa7ca50e2db16e33e?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fb39e6e81657b4a7594ff4128290fdeb1?format=webp&width=800', category: 'Folie PPF', description: 'Oklejenie frontu wraz z dekorami piano black, zabezpieczenie newralgicznych miejsc oraz dekorów wnętrza. Powłoka elastomerowa — 5 lat ochrony.' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F3cf67bc7775a4d36acdb5e5d3a26e86f?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F6a842b6580194a9093ca736965f70bb7?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F9013f21d74f14265a7e8ba266de2e2e9?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F36ff39dfd31f41f48c495d8951165775?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fd7005268423442e3b36e299b233c35f0?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F4f8c5956f8f94a78a565874896ba3a08?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F36fb9110868e46ca96a0bba98c189feb?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F0887179c298e4012b58cf335ebbc52d8?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F4bcbc6dd34924ab7902cca4c656e8b10?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F698ce1870b454622bd88b117d473072f?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F22f36a65f6f14184b50b7b08c19d861d?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fbc33411c4058435aa0ef88d76f458947?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F6e8aec54ffaa4b579ca0c15c2c10ac3c?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F2c8c67b2cac3478f8895fb62224e9a6c?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fb7b922ccb9ee4f49817c7727a13a0237?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F81ab61d550324bae83ae0184b82176d4?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fc7c6c5843c04455ebc667f695ad7f90e?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F2c5ff7f16a854c9ea851165cbd573e86?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F36b1366ffea94855ac2e0d11ceb438bc?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F084ff1a9f48c40058ca1a65b084585cf?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fc6674259cb7147e689366fc9f1967c46?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F22e624ab646346309a0c74d166d26a0d?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F65d2d9733c9349bcbbff13de3d63d4f9?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F252834ce1a964188b95ac683fbcef2ab?format=webp&width=800', category: 'Folie PPF', description: 'Full body PPF — całkowite oklejenie Mercedes GLE Coupe 53 AMG.' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F291a1b900b75458c9e9df24bf049733e?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F71bf70f10a2a4a729acddbfef0834a20?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F0622a603f3f24fc8a0925b8062c6e812?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F5d250c757d594c5993372f03e7440a75?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F35ec8695620547a080f2af5325e80ce0?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F76619b229d344f52bf6e5afd46625bc?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fe7b730164d894f69868a549a726ec527?format=webp&width=800', category: 'Folie PPF', description: 'Dwustopniowa korekta lakieru z nałożeniem powłoki elastomerowej — 5 lat ochrony. Zdjęcia pokazują porównanie przed i po.' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F05dd2d09055c49e2abd7e037bccd5efa?format=webp&width=800', category: 'Folie PPF', description: 'Dwustopniowa korekta lakieru z nałożeniem powłoki elastomerowej — 5 lat ochrony. Zdjęcia pokazują porównanie przed i po.' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F0c56c093d3914400b49866d0ddf7f1a8?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fd0cfc3c966c34c9d8e2e71fb155e02ae?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F70573f11a47b4000a3f41884cc827a3f?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fad8a339ac429413ea6a53a80d1ead5ed?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fdd2e64aa7a2d4d808b13e3492042abf8?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F869b557d17d54a01b9ac4455464e3b5f?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fbd4a962f71fc4539b435d67164990207?format=webp&width=800', category: 'Folie PPF' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fb33110e480504d64ae0a9c8a8839f76b?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F7803877da84141c285df99f0f684eb36?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F855f55e2c251444196ae61686bbd3195?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fe6dc0e647f5540489476bc4e18875506?format=webp&width=800', category: 'Korekta Lakieru' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Ffa525e516ba542fa89a0414dc37ca2c8?format=webp&width=800', category: 'Korekta Lakieru' },
];

export default function GaleriaPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<'Wszystkie' | Photo['category']>('Wszystkie');

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, []);

  const categories: (typeof activeCategory)[] = ['Wszystkie', 'Folie PPF', 'Korekta Lakieru', 'Detailing Wnętrza'];

  let filtered = activeCategory === 'Wszystkie' ? PHOTOS : PHOTOS.filter((p) => p.category === activeCategory);
  if (activeCategory === 'Folie PPF') {
    const withDescriptions = filtered.filter((photo) => Boolean(photo.description));
    const withoutDescriptions = filtered.filter((photo) => !photo.description);
    filtered = [...withDescriptions, ...withoutDescriptions];
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section id="galeria-top" className="py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-6 mb-8">
                <div className="h-1 w-16 bg-gradient-gold rounded-full mx-auto" />
                <h2 className="font-luxury text-4xl lg:text-5xl text-foreground">Galeria</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Wybierz kategorię, aby przeglądać realizacje.</p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === c ? 'bg-gold text-deep-black' : 'bg-card text-foreground/80 hover:bg-muted'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((item, index) => (
                  <button
                    key={`${item.url}-${index}`}
                    onClick={() => setSelected(index)}
                    className="group relative h-72 overflow-hidden rounded-3xl border border-border bg-gradient-glass text-left"
                  >
                    <img src={item.url} alt={item.title || item.category} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black/70 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 right-4 space-y-1">
                      <h3 className="text-white font-semibold text-lg">{item.title || item.category}</h3>
                      {item.description && (
                        <p className="text-white/80 text-sm leading-snug">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {selected !== null && (
                <div className="fixed inset-0 z-50 bg-deep-black/95 backdrop-blur-sm flex items-center justify-center">
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-10 p-2"
                    aria-label="Zamknij"
                  >
                    <X className="w-8 h-8" />
                  </button>

                  <div className="max-w-5xl max-h-[85vh] mx-8 text-center">
                    <img
                      src={filtered[selected].url}
                      alt={filtered[selected].title || filtered[selected].category}
                      className="w-full h-auto object-contain rounded-2xl shadow-luxury"
                    />
                    <div className="mt-8 space-y-4">
                      <span className="inline-block px-4 py-2 bg-gradient-gold text-primary-foreground text-sm font-semibold rounded-full shadow-gold">
                        {filtered[selected].category}
                      </span>
                      {filtered[selected].title && (
                        <h3 className="text-white text-2xl font-bold">{filtered[selected].title}</h3>
                      )}
                      {filtered[selected].description && (
                        <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
                          {filtered[selected].description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
