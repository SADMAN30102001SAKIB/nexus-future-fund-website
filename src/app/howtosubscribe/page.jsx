"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";
import { DollarSign, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Element } from "react-scroll";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const howToDetails = [
  "<p>Before you join, we encourage you to explore our website and learn everything about our trading strategies, targets, and results. We're fully transparent, so take your time to understand how we operate and why we're different from others in the market.</p>",
  "<p>If you have any questions or need clarification, reach out to us! Our friendly support team is available to help you at any step. Were here to guide you and make the process smooth and easy.</p>",

  "<p>Once you're ready to join, watch <a href='https://youtu.be/r_PeD-yQMoY?si=WkIlDS0GiA0oC8_X' style='color:LightSkyBlue; font-weight:bolder; text-decoration:underline'>this video</a> or follow these steps:<br/>Choose a subscription plan that suits you:<br/><b>-</b> Monthly Plan: <b style='color:hotpink;'>$50</b> billed every month.<br/><b>-</b> Yearly Plan: <b style='color:hotpink;'>$41.67</b>/month (billed annually at $500).<br/><br/>Make a payment using one of the following methods:<br/><b>-</b> Binance Pay ID<br/><b>-</b> TRC-20 Wallet Address<br/>(<i>details are provided in the pinned message of our official Telegram channel</i>)<br/><br/>Fill out the <a href='https://forms.gle/ToK2iFhcUcvgHrPE7' style='color:LightSkyBlue; font-weight:bolder; text-decoration:underline'>Registration</a> Form!<br/>After registration <a href='https://t.me/nexusfuturefundofficial' style='color:LightSkyBlue; font-weight:bold; text-decoration:underline'>DM us</a> on Telegram with your payment details:<br/><b>-</b> Binance Pay ID or TRC-20 Wallet Address<br/><br/>Once your payment is verified, we'll add you to our exclusive VIP Discord signals channel within minutes!</p>",

  "<p>We offer a <b style='color:hotpink'>7-day free</b> trial to help you get comfortable. Watch our team in action, learn how we trade, and understand our strategies. Whether you want to start trading immediately or just observe, the first week is completely free. No pressure—just learning!</p>",

  "<p>We trade in Crypto futures with 100X leverage. Here's how it works:<br/><b style='color:hotpink'>Real-time signals:</b> We tell you exactly when to buy or sell Crypto and how much equity to use.<br/><b style='color:hotpink'>Live updates:</b> You'll get instant updates on take profit and stop-loss points, so you always know what's happening.<br/><b style='color:hotpink'>Second entry strategy:</b> If the stop loss exceeds 50%, we give you a second entry option to help manage the trade effectively.<br/><b style='color:hotpink'>Daily signals:</b> We provide trading signals throughout the day, so you'll always have opportunities to grow your capital.</p>",

  "<p>By following our professional traders, you can expect a <b style='color:hotpink'>10%+</b> ROI on your capital every month. Unlike others, we don't make false promises or show fake results. Everything is 100% transparent—you'll see every trade, every result, with nothing hidden.</p>",

  "<p>If we ever close a month in negative ROI (<span style='color:hotpink'>which has never happened</span>), we'll refund your subscription fee. We stand behind our traders and are confident in their ability to deliver profits. You have nothing to lose by joining!</p>",
];

export default function HowToSubscribe() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/signals" passHref>
            <div className="flex items-center space-x-2">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <Image
                  src={logo}
                  alt="logo"
                  width={256}
                  height={256}
                  className="w-full"
                />
              </div>
            </div>
          </Link>
          <div>
            <Link href="https://discord.gg/kQ6kEdDzrC" passHref>
              <button className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400">
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/*How To*/}
        <Element name="howto">
          <section className="pt-36 pb-12">
            <div className="container mx-auto lg:px-36">
              <motion.div
                variants={staggerChildren}
                initial="initial"
                animate="animate">
                <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-8 rounded-lg shadow-xl">
                  <motion.h2
                    className="text-2xl lg:text-3xl font-bold mb-6"
                    variants={fadeIn}>
                    How to Join Our Premium Crypto Trading Signals Group - Step
                    by Step Guide
                  </motion.h2>
                  <motion.p
                    className="text-gray-300 mb-6 text-justify"
                    variants={fadeIn}>
                    Ready to start making real profits with professional Crypto
                    trading signals? Our Premium Signals Group gives you
                    exclusive access to high-accuracy trades and the expertise
                    of our seasoned traders. Follow these simple steps to join
                    and start earning 10%+ monthly returns:
                  </motion.p>
                  <motion.ul className="space-y-4" variants={staggerChildren}>
                    {[
                      "Get to Know Us",
                      "Contact Us for Any Questions",
                      "Join Our Premium Group",
                      "Free 7-Day Trial to Learn the Ropes",
                      "Start Trading Like a Pro",
                      "Watch Your Capital Grow",
                      "Refund Guarantee - No Risk",
                    ].map((item, index) => (
                      <motion.div variants={fadeIn} key={index}>
                        <li className="flex items-center" variants={fadeIn}>
                          <svg
                            className="w-6 h-6 text-pink-500 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <b>{item}</b>
                        </li>
                        <div
                          className="mt-2 mb-8 pl-8 text-gray-300 text-justify"
                          dangerouslySetInnerHTML={{
                            __html: howToDetails[index],
                          }}
                        />
                      </motion.div>
                    ))}
                  </motion.ul>
                  <motion.h2
                    className="text-2xl md:text-3xl font-bold mt-12"
                    variants={fadeIn}>
                    Ready to Join? Start Your Trading Journey Today!
                  </motion.h2>
                  <motion.p
                    className="text-gray-300 mb-6 text-justify"
                    variants={fadeIn}>
                    We are a trusted, transparent, and professional team
                    committed to helping you grow your money securely. Join our
                    premium group and experience expert Crypto trading
                    firsthand. Don&apos;t miss your chance to make steady,
                    reliable profits with us!
                  </motion.p>
                  <Link href="https://discord.gg/kQ6kEdDzrC" passHref>
                    <button className="px-4 py-2 my-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400">
                      Join
                    </button>
                  </Link>
                  <motion.h2
                    className="text-2xl md:text-3xl font-bold"
                    variants={fadeIn}>
                    Join us today and start trading like a pro!
                  </motion.h2>
                </div>
              </motion.div>
            </div>
          </section>
        </Element>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                  <DollarSign className="text-white" size={20} />
                </div>
                <span className="text-2xl font-bold">Nexus Future Fund</span>
              </div>
              <b className="text-white">Follow Us & Stay Connected.</b>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/nexusfuturefundofficial"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="Facebook">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/nexusfuturefund"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="Instagram">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 0C8.742 0 8.333.014 7.053.072 5.773.129 4.729.273 3.803.66 2.862 1.051 2.083 1.63 1.366 2.366c-.73.717-1.315 1.496-1.707 2.438-.387.925-.531 1.97-.588 3.25C.014 8.742 0 9.151 0 12s.014 3.258.072 4.538c.057 1.28.201 2.325.588 3.25.392.942.977 1.721 1.707 2.438.717.736 1.496 1.315 2.438 1.707.925.387 1.97.531 3.25.588 1.28.057 1.688.072 4.538.072s3.258-.014 4.538-.072c1.28-.057 2.325-.201 3.25-.588.942-.392 1.721-.977 2.438-1.707.736-.717 1.315-1.496 1.707-2.438.387-.925.531-1.97.588-3.25.057-1.28.072-1.688.072-4.538s-.014-3.258-.072-4.538c-.057-1.28-.201-2.325-.588-3.25-.392-.942-.977-1.721-1.707-2.438-.717-.736-1.496-1.315-2.438-1.707-.925-.387-1.97-.531-3.25-.588C15.258.014 14.849 0 12 0zm0 5.838c3.403 0 6.162 2.759 6.162 6.162S15.403 18.162 12 18.162 5.838 15.403 5.838 12 8.597 5.838 12 5.838zm0 1.838a4.324 4.324 0 100 8.648 4.324 4.324 0 000-8.648zm6.406-3.676a1.308 1.308 0 100 2.617 1.308 1.308 0 000-2.617z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/nexusfuturefund"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="Twitter">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@nexusfuturefundofficial"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="YouTube">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/nexusfuturefund"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0zM7.12 20.452H3.56V9.033h3.56v11.419zM5.34 7.536a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM20.452 20.452h-3.555v-5.763c0-1.374-.026-3.14-1.913-3.14-1.917 0-2.21 1.497-2.21 3.043v5.86h-3.553V9.033h3.413v1.559h.049c.475-.9 1.634-1.848 3.364-1.848 3.598 0 4.265 2.368 4.265 5.448v6.26z" />
                  </svg>
                </a>
                <a
                  href="https://t.me/nexusfuturefund"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="Telegram">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.247-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
              </div>
              <p className="text-gray-400 mt-2">
                Stay up-to-date with our market insights and live trading
                results by following us.
              </p>
            </div>
            {[
              {
                title: "Links",
                links: [
                  "Overall Result",
                  "Monthly Results",
                  "About",
                  "Our Policies",
                ],
                href: [
                  "https://docs.google.com/spreadsheets/d/1BAKN4CWq4dlS9xsxRF4xwNFSKMqU-bKG/edit?usp=sharing&rtpof=true&sd=true",
                  "https://docs.google.com/spreadsheets/d/1htiUavLfhYHFeLJSCq8Ma7-oBslAlWdhgocXGb15Maw/edit?usp=sharing",
                  "/about",
                  "/policy",
                ],
              },
              {
                title: "Other Services",
                links: ["Nexus Future Fund"],
                href: ["/"],
              },
              {
                title: "Contact",
                links: [
                  "nexusfuturefund@gmail.com",
                  "Address: 4 Endsleigh Street, London, WC1H 0DS",
                ],
              },
            ].map((column, index) => (
              <div key={index} className="w-full lg:w-1/5 mb-8 lg:mb-0">
                <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {column.href ? (
                        <a
                          href={column.href[linkIndex]}
                          className="text-gray-400 hover:text-white transition-colors duration-300">
                          {link}
                        </a>
                      ) : (
                        <div className="text-gray-400 hover:text-white transition-colors duration-300">
                          {link}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>Copyright © 2025 Nexus Future Fund. All Right Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollUp && (
          <motion.button
            className="fixed bottom-8 right-8 p-2 bg-pink-600 text-white rounded-full shadow-lg"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <ChevronUp size={30} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
