import localFont from "next/font/local";

const PPNRegular = localFont({
  src: "../public/fonts/PPNR.woff2",
});

const PPNUltraBold = localFont({
  src: "../public/fonts/PPNUB.woff2",
});

const PPNMedium = localFont({
  src: "../public/fonts/PPNMD.woff2",
});

const PPObjectSansRegular = localFont({
  src: "../public/fonts/PPOSR.woff2",
});

const NMachineLight = localFont({
  src: "../public/fonts/NeueMachina-Light.otf",
});

const NMachineRegular = localFont({
  src: "../public/fonts/NeueMachina-Regular.otf",
});

const NMachineUltraBold = localFont({
  src: "../public/fonts/NeueMachina-Ultrabold.otf",
});

export { NMachineLight, NMachineRegular, NMachineUltraBold, PPNMedium, PPNRegular, PPNUltraBold, PPObjectSansRegular };
