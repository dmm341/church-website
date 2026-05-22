import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { sermons } from "../data/sermons";

const getYouTubeVideoId = (url) => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/]+)/);
  return match ? match[1] : "";
};

const LatestSermon = () => {
  const [currentSermonIndex, setCurrentSermonIndex] = useState(0);
  const currentSermon = sermons[currentSermonIndex];
  const youtubeVideoId = getYouTubeVideoId(currentSermon.youtubeUrl);
  const youtubeThumbnailUrl = youtubeVideoId
    ? `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`
    : "";

  const showPreviousSermon = () => {
    setCurrentSermonIndex((index) => (index + 1) % sermons.length);
  };

  const showNextSermon = () => {
    setCurrentSermonIndex((index) => (index - 1 + sermons.length) % sermons.length);
  };

  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-center font-serif text-3xl font-bold text-slate-900 md:text-4xl">
          Watch the Latest <span className="text-orange-600">Sermons</span>
        </h2>

        <a
          href={currentSermon.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Watch ${currentSermon.title} on YouTube`}
          className="group relative block h-64 overflow-hidden rounded-xl bg-slate-900 bg-cover bg-center shadow-xl ring-1 ring-black/10 md:h-[420px]"
          style={{ backgroundImage: `url(${youtubeThumbnailUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/35" />

          <div className="absolute left-0 right-0 top-0 px-5 py-4 text-white">
            <p className="text-lg font-bold leading-tight md:text-2xl">
              {currentSermon.title}
            </p>
            <p className="text-sm text-white/90 md:text-base">
              {currentSermon.speaker}
            </p>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-20 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg transition group-hover:scale-110 group-hover:bg-red-700">
              <FaYoutube className="h-10 w-10" aria-hidden="true" />
            </span>
          </div>
        </a>

        <div className="mt-5 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <button
            type="button"
            onClick={showPreviousSermon}
            className="flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2 font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-600"
          >
            <ChevronLeftIcon className="h-5 w-5" />
            Previous Date
          </button>

          <p className="text-center text-sm font-semibold text-slate-600">
            {currentSermon.date}
          </p>

          <button
            type="button"
            onClick={showNextSermon}
            className="flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2 font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-600"
          >
            Next Date
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestSermon;
