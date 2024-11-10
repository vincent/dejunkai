import { expect } from 'chai'

import { fileType } from '../../src/internal/file-patterns.js';

describe('fileType', () => {
  for (const path of [
    'Show.Name.S01E05.1080p.WEBDL.mkv',
    'game.of.thrones.s01e01.1080p.mkv',
    'game.of.thrones.s01e02.720p.mkv',
    'game_of_thrones_s01e03_HDR.mkv',
    "planet.earth.II.s01e01.islands.2160p.APTV.mkv",
    "planet.earth.II.s01e02.mountains.uhd.APTV.mkv",
    "planet.earth.II.s01e03.jungles.hdr.APTV.mkv",
    'stranger-things-season01-episode01-4k.NICK.mp4',
    'stranger-things-season01-episode02-hdr.HMAX.mp4',
    'stranger-things-season01-episode03.AMC.mp4',
    'the_mandalorian_s01x01_chapter_1.mkv',
    'the_mandalorian_s01x02_chapter_2.mkv',
    'the_mandalorian_s01x03_chapter_3.mkv',
    'better.call.saul.s01.e01.pilot.1080p.mkv',
    'better.call.saul.s01.e02.mijo.720p.mkv',
    'better.call.saul.s01.e03.nacho.hdtv.mkv',
    'mini_series/chernobyl.2019.s01e01.1_23_45.2160p.mkv',
    'mini_series/band.of.brothers.2001.e01.currahee.bluray.mkv',
    'mini_series/the_queens_gambit_2020_episode1_openings_4k.CBS.mp4',
    'mini_series/mare-of-easttown-2021-s01e01-miss-lady-hawk-herself.mkv',
    'reality_tv/survivor.s43e01.livin.2022.hdtv.mp4',
    'reality_tv/amazing_race_s34e01_2022_many_miles_ahead.mkv',
    'reality_tv/master-chef-us-s12e01-back-for-more.mp4',
    'reality_tv/top.chef.s19e01.houston.we.have.a.problem.mkv',
    'web_series/red.vs.blue.s01e01.why_are_we_here.mp4',
    'web_series/rwby_volume1_chapter1_ruby_rose.mp4',
    'web_series/critical-role-c3e01-the-draw-of-destiny.mp4', 
  ]) it(`should return "tv" for a video file path containing chapter information: ${path}`, () => {
    expect(fileType(path)).to.be.equal('tv');
  });

  for (const path of [
    'The.Matrix.1999.1080p.BluRay.x264.mkv',
    "the_godfather_(1972)_remastered.mkv",
    "2001.a.space.odyssey[1968].mp4",
    "citizen.kane-1941-restored.avi",
    "casablanca (1942) [colorized].mkv",
    "lawrence_of_arabia_1962_4k.mp4",
    "gone_with_the_wind-1939-hdr.mkv",
    "twelve_angry_men[1957]_criterion.avi",
    "avatar_2015.mkv",
    "black.panther-2020.mp4",
    "dune[2020].mkv",
    "joker (2022).avi",
    "no_time_to_die-2019.mkv",
    "tenet_2022_hdr.mp4",
    "cosmos_2020_ep01_possible_worlds.mp4",
    "cosmos_2020_ep02_cosmic_shore.mp4",
    "cosmos_2020_ep03_lost_worlds.mp4",
    "comedy/dave_chappelle-2021-closer.mkv",
    "comedy/bo_burnham_inside[2021].mp4",
    "comedy/john.mulaney.kid.gorgeous.2018.mkv",
    "comedy/hannah.gadsby-nanette_2018.mp4",
    "world_cinema/amelie.2001.le.fabuleux.destin.d.amelie.poulain.mkv",
    "world_cinema/城市之光_1931_city_lights.mp4",
    "world_cinema/[1954]七人の侍_seven_samurai.avi",
    "world_cinema/das_boot_(1981)_theatrical_cut.mkv",
    "world_cinema/la.vita.e.bella.1997.life_is_beautiful.mp4",
  ]) it(`should return "movie" for a video file path without chapter information: ${path}`, () => {
    expect(fileType(path)).to.be.equal('movie');
  });

  for (const path of [
    'Artist - Song Title.mp3',
    "pink_floyd/money (remastered).flac",
    "pink_floyd/time_2011_remaster.wav",
    "pink_floyd/us and them.flac",
    "pink_floyd/brain damage [2011].wav",
    "pink_floyd/the great gig in the sky.flac",
    "pink_floyd/wish you were here (2011).wav",
    "pink_floyd/comfortably.numb.flac",
    "pink_floyd/hey_you-remaster.wav",
    "the_beatles/hey_jude (2009 Mix).mp3",
    "the_beatles/let.it.be.flac",
    "the_beatles/yesterday_remastered.wav",
    "the_beatles/help! [2009].flac",
    "the_beatles/come together 2009.mp3",
    "the_beatles/here_comes_the_sun-remix.wav",
    "classical/beethoven_symphony_no_5_op_67.flac",
    "classical/mozart-k525_eine_kleine.wav",
    "classical/bach_bwv.847_prelude.flac",
    "classical/chopin-op-28-no-15.wav",
    "classical/vivaldi_four_seasons_op8.flac",
    "miles_davis/01-kind_of_blue_(1959)_so_what.flac",
    "miles_davis/02-kind_of_blue_(1959)_freddie_freeloader.DD+.wav",
    "miles_davis/03-kind.of.blue.1959.blue_in_green.AAC.flac",
    "miles_davis/[1959] Kind of Blue - 04 - All Blues.wav",
    "john_coltrane/1_a_love_supreme_pt1[1964].flac",
    "john_coltrane/2_a_love_supreme_pt2[1964].wav",
    "john_coltrane/3.a.love.supreme.pt3.1964.flac",
    "john_coltrane/4 - A Love Supreme Pt4 (1964).wav",
  ]) it(`should return "music" for an audio file path: ${path}`, () => {
    expect(fileType(path)).to.be.equal('music');
  });

  for (const path of [
    'Great_Expectations_by_Charles_Dickens.m4b',
    'Great_Expectations_by_Charles_Dickens.aax',
    'Great_Expectations_by_Charles_Dickens.aa',
  ]) it(`should return "audiobook" for an audiobook file path: ${path}`, () => {
    expect(fileType(path)).to.be.equal('audiobook');
  });

  for (const path of [
    'Great_Expectations_by_Charles_Dickens.azw',
    'Great_Expectations_by_Charles_Dickens.azw3',
    'Great_Expectations_by_Charles_Dickens.azw4',
    'Great_Expectations_by_Charles_Dickens.cbr',
    'Great_Expectations_by_Charles_Dickens.cbz',
    'Great_Expectations_by_Charles_Dickens.chm',
    'Great_Expectations_by_Charles_Dickens.djvu',
    'Great_Expectations_by_Charles_Dickens.docx',
    'Great_Expectations_by_Charles_Dickens.epub',
    'Great_Expectations_by_Charles_Dickens.fb2',
    'Great_Expectations_by_Charles_Dickens.ibooks',
    'Great_Expectations_by_Charles_Dickens.lit',
    'Great_Expectations_by_Charles_Dickens.mobi',
    'Great_Expectations_by_Charles_Dickens.pdf',
    'Great_Expectations_by_Charles_Dickens.pdb',
    'Great_Expectations_by_Charles_Dickens.prc',
    'Great_Expectations_by_Charles_Dickens.rtf',
    'Great_Expectations_by_Charles_Dickens.tcr',
    'Great_Expectations_by_Charles_Dickens.tpz',
    'Great_Expectations_by_Charles_Dickens.txt',
  ]) it(`should return "ebook" for an ebook file path: ${path}`, () => {
    expect(fileType(path)).to.be.equal('ebook');
  });
});
