import helixModels from './models.json';
import * as fs from 'fs';

const Ky = [{
    id: "HD2_PreampVintagePre",
    basedOn: "Line 6 Original",
    synopsis: '<p>This model is used for the vocals in this video. For complete details, read the videos description on YouTube.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EmFP79KaZ9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}, {
    id: ["HD2_AmpWhoWatt100", "HD2_PreampWhoWatt100"],
    basedOn: "Hiwatt® DR-103 Brill",
    manualUrl: "https://jasonshimmy.com/music/amps/hiwatt/dr-103",
    synopsis: "<p>Amp with a brilliant chime and unique tone-stack. If you need more gain, crank the drive and master. This amp has a special Master, an additional gain stage between the master volume and the phase inverter, then the model matches this trait.</p>",
    notableUsers: "<p>Pete Townshend's Live at Leeds-era tone with The Who in the late '60s, as well as David Gilmour's soaring lead work with Pink Floyd in the '70s.</p>"
}, {
    id: ["HD2_AmpSoupPro", "HD2_PreampSoupPro"],
    basedOn: "Supro® S6616",
    manualUrl: "https://jasonshimmy.com/music/amps/supro/s6616",
    synopsis: '<p>Wind it up, and the S6616 offers juicy, brown overdrive that can sound like a raging stack when mixed with the track, yet with a character all its own. Reined in to clean volumes, it has a beautifully crisp spank. And at all levels the 6"x9" speaker yields nodes and peaks that contribute to an unusual and distinctive sonic voice that has come to be known as the Supro sound.</p>',
    notableUsers: "<p>Jimmy Page has admitted to using a Supro amp to record most of the first two Led Zeppelin albums.</p>"
}, {
    id: ["HD2_AmpStoneAge185", "HD2_PreampStoneAge185"],
    basedOn: "Gibson® EH-185",
    manualUrl: "https://jasonshimmy.com/music/amps/gibson/eh-185",
    synopsis: "<p>The EH-185 makes a surprisingly versatile voice for sculpting anything from vintage jazz tones to raw rock 'n roll when cranked up, and sits beautifully in a full-band mix, both live and in the studio.</p>",
    notableUsers: "<p>Seminal jazzer Charlie Christian is believed to have moved up to an EH-185 combo before his death, about the same time that he stepped up from his original Gibson ES-150 guitar to an ES-250. In a more modern setting, it has shared the stage with Queen Of The Stone Age's Josh Homme.</p>"
}, {
    id: ["HD2_AmpTweedBluesNrm", "HD2_AmpTweedBluesBrt", "HD2_PreampTweedBluesNrm", "HD2_PreampTweedBluesBrt"],
    basedOn: "Fender® Bassman",
    buyUrl: "https://amzn.to/4a475YS",
    manualUrl: "https://jasonshimmy.com/music/amps/fender/bassman",
    synopsis: "<p>An amp with the fat bottom end you'd expect from a bass amp, but also has the Fender® twang on the top. Try a Drive setting of about 4 or 5 — it's guaranteed to dredge up the best R & B licks you know. Sounds great with a Booster Drive (Treble) in front. The normal channel is the mellower of the two, with less brightness and gain than the Bright channel. The bright channel utilizes the second half of the first preamp tube for a different voicing. High frequencies are increased due to the addition of a bright cap across the volume knob.",
    notableUsers: "<p>The Bassman doesn't have a master volume, so like all amps of this era, you had to crank this mutha up to get that dirty tone revered by all Bassman enthusiasts! As Buddy Guy, Bruce Springsteen, Jimmy Vaughan, and so many others would tell you, when you're talking vintage amps, the Bassman really is ground-zero for big-combo tone.</p></p>"
}, {
    id: ["HD2_AmpUSSmallTweed", "HD2_PreampUSSmallTweed"],
    basedOn: "Fender® Champ®",
    buyUrl: "https://amzn.to/3qyJojP",
    manualUrl: "https://jasonshimmy.com/music/amps/fender/champ",
    synopsis: '<p>In the tweed champ, the bass and treble are after the amp modeling, but the midrange control is between the two preamp gain stages. The midrange knob can become a cool drive feature. Tweed amplifiers typically break up earlier than later "cleaner" models and are known for their warm-sounding overdrive.',
    notableUsers: "<p>Eric Clapton used the Champ almost exclusively for Derek and the Dominos. Other notable users are Joe Perry and Brad Whitford of Aerosmith as well as Joe Walsh and Slash.</p></p>"
}, {
    id: ["HD2_AmpUSDeluxeNrm", "HD2_AmpUSDeluxeVib", "HD2_PreampUSDeluxeNrm", "HD2_PreampUSDeluxeVib"],
    basedOn: "Fender® Deluxe Reverb®",
    buyUrl: "https://amzn.to/37s499A",
    manualUrl: "https://jasonshimmy.com/music/amps/fender/deluxe",
    synopsis: "<p>The Normal channel is the mellower of the two, with less brightness and gain than the Vibrato channel. The Vibrato channel is a separate preamp circuit with tone and clipping characteristics that are different than the Normal channel due to an additional 12Ax7 tube stage. High frequencies are increased due to the addition of a bright cap across the volume knob. Most players love a Deluxe Reverb® when it's turned up to about 7 for a nice gritty sound that cleans up when you back off your guitar's volume knob just a little. Notice how the tone control response changes as this Amp Model's Drive is changed: clean settings are crisp and present, while more driven settings will mellow the high end. This is typical of what you get from a Deluxe Reverb® and is nicely captured here.",
    notableUsers: "<p>Muddy Waters, Mike Campbell, Jackson Brown, Vince Gill, Elvis Costello, Pete Townshend, Buddy Guy. Honestly, this list could go on and on.</p></p>"
}, {
    id: ["HD2_AmpUSDoubleNrm", "HD2_AmpUSDoubleVib", "HD2_PreampUSDoubleNrm", "HD2_PreampUSDoubleVib"],
    basedOn: "Fender® Twin Reverb®",
    buyUrl: "https://amzn.to/3uaSG7U",
    manualUrl: "https://jasonshimmy.com/music/amps/fender/twin",
    synopsis: "<p>An all-time classic of biting twang and shimmering clean tones, the Fender Twin Reverb first hit the scene in 1964 and quickly became the standard for large, fully featured touring combos. The Normal channel is the mellower of the two, with less gain than the Vibrato channel. The Vibrato channel is a separate preamp circuit with clipping characteristics that are different than the Normal channel due to an additional 12Ax7 tube stage.",
    notableUsers: "<p>Played clean but singing with a Telecaster, this is the sound of Roy Buchanan; cranked with a Les Paul, it's pure Michael Bloomfield. It never gets extremely overdriven and dirty, mostly just louder-a lot louder.</p></p>"
}, {
    id: ["HD2_AmpMailOrderTwin", "HD2_PreampMailOrderTwin"],
    basedOn: "Silvertone® 1484",
    manualUrl: "https://jasonshimmy.com/music/amps/silvertone/1484",
    synopsis: "<p>These amps are famous for their nice smooth overdrive but they've also got a sweet clean tone at lower volumes.",
    notableUsers: "<p>Some notable users of this amp are Jack White, Beck, and Coldplay.</p></p>"
}, {
    id: ["HD2_AmpDividedDuo", "HD2_PreampDividedDuo"],
    basedOn: "÷13 JRT 9/15",
    manualUrl: "https://jasonshimmy.com/music/amps/divided-by-13/jrt915",
    synopsis: '<p>Divided by 13 creates two differently voiced but blendable channels for a simple yet incredibly versatile front end. The result is a palette of tones that remind you of the best American "tweed" and classic British amps, while somehow sounding entirely unique throughout their range. Each volume controls the two 5879 tubes. One is voiced with more gain and darker, the other is brighter with less gain.</p><p><strong>Video Examples</strong></p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rfbD1odfH4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    notableUsers: "<p>Famous Divided By 13 Users include Lyle Workman of Beck, Rusty Anderson, Jackson Browne, and Ronnie Wood.</p>"
}, {
    id: ["HD2_AmpInterstateZed", "HD2_PreampInterstateZed"],
    basedOn: "Dr Z® Route 66",
    manualUrl: "https://jasonshimmy.com/music/amps/dr-z/route-66",
    synopsis: '<p>This amp achieves an extremely touch sensitive, full-bodied "milkshake thick" overdrive when pushed, without ever losing its impressive clarity and definition. Treble and bass operate regularly until 50%, and dial in gain once turned past 50%. To put this amp into overdrive, crank all three controls (Drive, Treble, Bass), use humbuckers and possibly an overdrive pedal.</p>'
}, {
    id: ["HD2_AmpJazzRivet120", "HD2_PreampJazzRivet120"],
    basedOn: "Roland® JC-120 Jazz Chorus",
    buyUrl: "https://amzn.to/37sxqAP",
    manualUrl: "https://jasonshimmy.com/music/amps/roland/jc120",
    synopsis: "<p>Roland Jazz Chorus is a solid-state instrument amplifiers produced in Japan since 1975. Its name comes from its built-in analog chorus effect. The Jazz Chorus series became increasingly popular in the late 1970s and early 1980s new wave and post-punk scenes because of its clean yet powerful sound.",
    notableUsers: "<p>Its earliest users included Albert King, Andy Summers (The Police), Robert Smith of The Cure and Siouxsie and the Banshees, and Pat Metheny. James Hetfield and Kirk Hammett of Metallica use it for their clean tones as well.</p></p>"
}, {
    id: ["HD2_AmpEssexA15", "HD2_PreampEssexA15"],
    basedOn: "Vox® AC-15",
    buyUrl: "https://amzn.to/3ucMxrN",
    manualUrl: "https://jasonshimmy.com/music/amps/vox/ac15",
    synopsis: "<p>For the AC-15, the master volume is post-phase-inverter in the full amp model. This allow the user to use the Drive knob to hit just the Phase Inverter tubes harder. However, in this amp the power tubes can distort a LOT. When this is combined with the fact that the preamp doesn't distort a whole lot on its own, it can produce a situation where turning the preamp up and the master volume down will clean up the sound quite a bit. The preamp barely distorts and the power amp distorts a TON. This is the opposite of many amps where the preamp is designed to distort and, while the power amp can distort as well, most of the crunch comes from smashing the preamp.",
    notableUsers: "<p>Early Beatles recordings and the James Bond theme from Dr. No feature the Vox AC-15.</p></p>"
}, {
    id: ["HD2_AmpEssexA30", "HD2_PreampEssexA30"],
    basedOn: "Vox® AC-30 with top boost",
    buyUrl: "https://amzn.to/2M2uuU6",
    manualUrl: "https://jasonshimmy.com/music/amps/vox/ac30",
    synopsis: "<p>The Vox AC-30 with Top Boost was the amp made famous by many British invasion bands. Much of the unique character of the Vox® sound can be attributed to the fact that Class A amps overdrive in a very different way than Class AB. Although usually played fairly clean, a cranked AC 30 has a great saturated lead tone.</p><p><strong>Tips:</strong> Starting Point: Master 10, set Drive to taste, Mid 5 (50%), Instead of turning up Drive, try boosting the input signal before the amp. Cabinet suggestion: Alinco Silver Or use (or combine with) Marshall greenbacks (4x12 20w or 25w). Alternative: Red Wirez Vox and Marshall greenbacks, Ownhammer Blue and greenbacks.</p>",
    notableUsers: "<p>The Beatles, The Shadows, Tom Petty & The Heartbreakers, Brian May of Queen, Peter Buck of R.E.M., and Foo Fighters have all used classic AC-30s to make their music.</p>"
}, {
    id: ["HD2_AmpA30FawnNrm", "HD2_AmpA30FawnBrt", "HD2_PreampA30FawnNrm", "HD2_PreampA30FawnBrt"],
    basedOn: "Vox® AC-30 Fawn",
    buyUrl: "https://amzn.to/3s5WWUn",
    manualUrl: "https://jasonshimmy.com/music/amps/vox/ac30",
    synopsis: "<p>The Vox AC-30 Fawn contains two channels. Both the bright channel and the normal channel only hit one preamp stage before going to the phase inverter in the power amp. All of the saturation of this amp comes from the power amp, and it can get pretty dirty. The bright channel is pretty bright when run clean, but that brightness when driving the power amp results in a wonderfully rich and harmonically complex overdrive. It's quite responsive to saturation with picking dynamics and volume knob control. Turning up the Bias knob reduces crossover distortion the best, but there are no wrong knob settings. If you like the sound coming out, the knobs are set right for you.",
    notableUsers: "<p>The Beatles first recordings in the Abbey Road studio used a fawn.</p></p>"
}, {
    id: ["HD2_AmpMatchstickCh1", "HD2_AmpMatchstickCh2", "HD2_AmpMatchstickJump", "HD2_PreampMatchstickCh1", "HD2_PreampMatchstickCh2", "HD2_PreampMatchstickJump"],
    basedOn: "Matchless® DC30",
    manualUrl: "https://jasonshimmy.com/music/amps/matchless/dc30",
    synopsis: '<p>Pure "Class A" configuration gives rich, complex harmonics whether played clean, mildly overdriven, or with all out power tube saturation. This means you should sound great in any situation, in any music style. Similar to AC30 without breaking, Channel 2 similar to AC15.',
    notableUsers: "<p>Paul Jackson Jr., Chris Collingwood of Fountains of Wayne, Mike McCready of Pearl Jam, Neil Young, Coy Bowles of The Zac Brown Band, James Valentine of Maroon 5, Ben McKee of Imagine Dragons, Bob Dylan, and many more.</p></p>"
}, {
    id: ["HD2_AmpMandarin80", "HD2_PreampMandarin80"],
    basedOn: "Orange® OR80",
    manualUrl: "https://jasonshimmy.com/music/amps/orange/or80",
    synopsis: "<p>The F.A.C. control stands for Frequency Analysing Control. It is a mid-range sweep that offers many variations on the Orange sound. Experiment with different settings for a variety of sounds. It is basically EQ settings from bassy all the way to the left and getting progressively thinner as you go to the right. Most people, set it all the way to the left or one click to the right from that.The FAC control switches between different interstage coupling capacitors which will change the low frequency cutoff/rolloff point of the preamp. In other words, it cuts bass increasingly with each click clockwise. The HF drive is a presence control, that boost/attenuate very high frequencies, comparing to other amplifiers. It's in between gain stages (2 to 3), so it does effect drive. You can call it a drive control, like the Eq, that is between stage 1 and 2.</p>"
}, {
    id: ["HD2_AmpBritJ45Nrm", "HD2_AmpBritJ45Brt", "HD2_PreampBritJ45Nrm", "HD2_PreampBritJ45Brt"],
    buyUrl: "https://amzn.to/3s14ckk",
    basedOn: "Marshall® JTM-45",
    manualUrl: "https://jasonshimmy.com/music/amps/marshall/jtm-45",
    synopsis: "<p>The Normal channel is the mellower of the two, with less (as you'd expect) brightness and gain than the Bright channel. The Bright channel utilizes the second half of the first preamp tube (the Normal channel uses the first half only) for a different voicing. High frequencies are increased due to an inter-stage high shelving filter.</p><p><strong>Tips:</strong> It's a bass-heavy amp -> Decreasing Bass could be a good tip. Great for clean tones as well as rock tones.</p>",
    notableUsers: `<p>This is the exact same amplifier as the Marshall® "Bluesbreaker" that Eric Clapton made famous, but in head form, rather than housed in a 2x12" combo. This is your starting if you're looking for that 'beano' tone.</p>`
}, {
    id: ["HD2_AmpBritPlexiNrm", "HD2_AmpBritPlexiBrt", "HD2_AmpBritPlexiJump", "HD2_PreampBritPlexiNrm", "HD2_PreampBritPlexiBrt", "HD2_PreampBritPlexiJump"],
    basedOn: "Marshall® Super Lead 100",
    manualUrl: "https://jasonshimmy.com/music/amps/marshall/super-lead",
    buyUrl: "https://amzn.to/3ct4w6x",
    synopsis: `<p>A Plexi is supposed to sound fizzy (it's helps to cut through in a mix). Don't be afraid to turn the bass all the way down or the treble all the way up. Just like with the actual amp. For example, on the normal channel of a Plexi most people turn the bass way down. Otherwise it's too flubby." Settings for a "typical" Plexi tone could be aprox. Bass: 2, Mid: 8, Treble 7.5. Presence adjust to taste.`,
    notableUsers: "<p>Users include Pete Towsend, Eric Clapton, Angus Young of AC/DC, and most famously, by Jimi Hendrix at his Woodstock performance.</p></p>"
}, {
    id: ["HD2_AmpBritP75Nrm", "HD2_AmpBritP75Brt", "HD2_PreampBritP75Nrm", "HD2_PreampBritP75Brt"],
    basedOn: "Park® 75",
    manualUrl: "https://jasonshimmy.com/music/amps/park/75",
    synopsis: "<p>Although they were usually based loosely on circuits used in classic Marshall amps, Park models were often given clever new twists, such as the increased front-end gain in the 75 and the use of military-grade KT88 output tubes rather than the traditional EL34s. Add it all up, and it's a sizzling, crunchy plexi-style tone like nothing you've ever heard before, equally adept at classic British blues-rock and contemporary grind. The Normal channel is the mellower of the two, with less brightness and gain than the Bright channel. The Bright channel utilizes the second half of the first preamp tube for a different voicing. High frequencies are increased due to an inter-stage high-shelving filter.</p>"
}, {
    id: ["HD2_AmpBrit2204", "HD2_PreampBrit2204"],
    basedOn: "Marshall® JCM-800",
    buyUrl: "https://amzn.to/3avXugh",
    manualUrl: "https://jasonshimmy.com/music/amps/marshall/jcm-800",
    synopsis: "<p>Turn to this Amp Model to conjure up tones of the coveted JCM 800, one of Marshall's most universally acclaimed modern amps. This updated version of the Plexi continued Marshall's heritage with added gain and edge for a new generation of rock guitarists. One of the biggest differences here is that the tone controls are located after the preamp tubes.</p><p><strong>Tips:</strong> Turn up Master Volume. Try with a low-gain TS808 or Tube Drive. The real amp is too bright, you can adjust the various tone controls and parameters to reduce the brightness to your tastes with presence normally way down. They are designed to be run loud and the brightness decreases as the Master Volume is increased. If you don't push the power amp all you are hearing is the preamp which is voiced to be trebly. The power amp then compresses the highs and the sound gets fatter, but set Master Volume too high and it will get muddy. The sound of 80's hair metal, treble boosting amplifies the upper frequencies, however, that treble boosting helps the sound cut.</p>"
}, {
    id: ["HD2_AmpGermanMahadeva", "HD2_PreampGermanMahadeva"],
    basedOn: "Bogner® Shiva",
    manualUrl: "https://jasonshimmy.com/music/amps/bogner/shiva",
    synopsis: "<p>The beauty of the Shiva is that it takes what Marshall did in the '70s and '80s and adds some modern appointments so that the user can achieve tones ranging from classic rock to heavy metal (the utilization of the boost feature works wonders here). One thing is constant, though: Swirling notes. It is hard to describe, but the Shiva has a midrange character that results in what sounds like a light swirling of each note and chord that creates a very harmonically rich tone.</p><p><strong>Tips:</strong> Bogner around noon (50%) are dark, it's like turning the treble way down on a Marshall. The treble knob at 50% on a Bogner is equivalent to the treble knob at 10% on a Marshall. If you turned the treble up to 8 or 9 it would sound a lot like a Plexi.</p>"
}, {
    id: ["HD2_AmpGermanUbersonic", "HD2_PreampGermanUbersonic"],
    basedOn: "Bogner® Überschall®",
    manualUrl: "https://jasonshimmy.com/music/amps/bogner/uberschall",
    synopsis: "<p>This model is reminiscent of an 800, modded for heavier, grinding lows and what some call insane gain. The presence knob on the Bogner Ubserschall is more like a contour, affects most of the midrange as well.</p><p><strong>Tips:</strong> Heavy grinding lows and insane gain, it could be too boomy (low cut). From Real Amp manual: starting point control values, gain 60%, bass 60%, mid 60%, Treble 60%, Presence 60%. Keep the Master volume low (5 or less). Turn up Presence, add Mids</p>"
}, {
    id: ["HD2_AmpCaliIVR1", "HD2_AmpCaliIVR2", "HD2_AmpCaliIVLead", "HD2_PreampCaliIVR1", "HD2_PreampCaliIVR2", "HD2_PreampCaliIVLead"],
    basedOn: "MESA/Boogie® Mark IV",
    manualUrl: "https://jasonshimmy.com/music/amps/mesa-boogie/mark-iv",
    synopsis: `<p>In 1984, Mesa / Boogie released the first "Tri-modal" amplifier, the Mark III. Tri modal, because it has separate modes for Clean sound, Crunch sound and Lead sound. The Mark IV, which came out six years later, significantly improved the ability to control each channel separately by introducing two controller knobs on the front panel, thus optimizing available space without increasing the Mark III's comfortable and versatile size. It is a complete amplifier, has all ranges, from blues, jazz, rock, heavy, even metal, has immense possibilities and just so make it especially complicated.</p>`
}, {
    id: ["HD2_AmpCaliRectifire", "HD2_PreampCaliRectifire"],
    basedOn: "MESA/Boogie® Dual Rectifier®",
    manualUrl: "https://jasonshimmy.com/music/amps/mesa-boogie/dual-rectifier",
    synopsis: `<p>Based on a 2001, 3 Channel Mesa/Boogie® Dual Rectifier® Solo Head. The Dual Rectifier® was part of Boogie's more modern, high gain approach for that "big hair" sound. In contrast to the earlier Boogies, the Dual Rectifier's tone controls have more influence at high gain settings, so you can scoop the mids and increase the bottom end. We used Channel 3 on the Modern setting for this one with the rear switches set to Bold and Tube Rectifier®, respectively.</p><p><strong>Tips:</strong> Real Rectos are bassy/fizzy beasts but that tone works great for certain genres. This is based on the Modern mode, so be very careful with the Master parameter. If you turn it up too high it will flub out really quick. If in doubt reduce the MV (because there is no negative feedback, the power amp has a lot more gain and a huge bass boost).</p>`
}, {
    id: ["HD2_AmpANGLMeteor", "HD2_PreampANGLMeteor"],
    basedOn: "ENGL® Fireball 100",
    manualUrl: "https://jasonshimmy.com/music/amps/engl/fireball-100",
    synopsis: `<p>Great for aggressive, drop-tuned riff work, Based on* 2009 ENGL® Fireball 100 (German) Designed to redefine the stereotypical "shred" sound and dial in a more musical lower-midrange and bass response, the ENGL Fireball 100 has become one of the new standards of contemporary rock and metal.</p><p><strong>Tips:</strong> Since the Treble and Presence control knobs sweep through different frequency ranges and influence the signal at different places in the amp's internal signal chain, you can dial in different combinations of treble and presence settings to come up with many interesting sonic variations.</p>`
}, {
    id: ["HD2_AmpSoloLeadClean", "HD2_AmpSoloLeadCrunch", "HD2_AmpSoloLeadOD", "HD2_PreampSoloLeadClean", "HD2_PreampSoloLeadCrunch", "HD2_PreampSoloLeadOD"],
    basedOn: "Soldano SLO-100",
    manualUrl: "https://jasonshimmy.com/music/amps/soldano/slo-100",
    buyUrl: "https://amzn.to/39lp13d",
    synopsis: "<p>Much of the love for the SLO-100 is due to not only its juicy high gain tones, but also its clean and crunchy capabilities. The SLO-100 features two channels, Normal and Overdrive, with a Clean / Crunch gain switch on the Normal channel.</p><p><strong>Solo Lead Clean:</strong> This model of the Normal channel switched to Clean provides the most headroom and a variety of warm to shimmery clean tones.</p><p><strong>Solo Lead Crunch:</strong> Here we've modeled the Normal channel switched to Crunch, which is superb for a range of distorted textures from polite to aggressive.</p><p><strong>Solo Lead Overdrive:</strong> A model of the Overdrive channel with some seriously tight bottom chunk to liquid, screaming lead capabilities.</p>",
    notableUsers: "<p>The SLO-100 was made an instant hit by early adopters Eric Clapton and Mark Knopfler, and used by a range of players, including Warren DeMartini, Warren Haynes, Lou Reed, and Eddie Van Halen.</p>"
}, {
    id: ["HD2_AmpPVPanama", "HD2_PreampPVPanama"],
    basedOn: "Peavey® 5150®",
    buyUrl: "https://amzn.to/3s3LpoI",
    manualUrl: "https://jasonshimmy.com/music/amps/peavey/6505",
    synopsis: `<p>Well known for its high gain overdrive channel, and has seen widespread use by rock, hardcore and metal guitarists. An early breakthrough was its use by Colin Richardson and Andy Sneap, two "seminal" British producers of heavy metal; especially Machine Head's Burn My Eyes (1994) helped the 5150 gain a reputation for its sound, which "defined a generation of guitar tone".</p>`
}, {
    id: ["HD2_AmpLine6Elektrik", "HD2_PreampLine6Elektrik"],
    basedOn: "Line 6 Original",
    manualUrl: "https://jasonshimmy.com/music/amps/line-6/elektrik",
    synopsis: "<p>This high-voltage, face-melting original has interactive presence & mid-range controls, with more gain than you can shake a stick at. It has something from the first Bomber Uber.</p>"
}, {
    id: ["HD2_AmpLine6Doom", "HD2_PreampLine6Doom"],
    basedOn: "Line 6 Original",
    manualUrl: "https://jasonshimmy.com/music/amps/line-6/doom",
    synopsis: "<p>Here's a hybrid to fill a void for doom/sludge players. It's a JCM800 preamp going into a Hiwatt® power amp with some additional tweaks, to give you large amounts of gain and a rich, sag-induced reaction with a whole lot of bass.</p>"
}, {
    id: ["HD2_AmpLine6Epic", "HD2_PreampLine6Epic"],
    basedOn: "Line 6 Original",
    manualUrl: "https://jasonshimmy.com/music/amps/line-6/epic",
    synopsis: "<p>A metal-friendly beast that provides sustain for days at virtually any playing dynamic, giving up gobs of distortion with ease.</p>"
}, {
    id: ["HD2_AmpLine62204Mod", "HD2_PreampLine62204Mod"],
    basedOn: "Line 6 Original",
    manualUrl: "https://jasonshimmy.com/music/amps/line-6/2204-mod",
    synopsis: `<p>Hot rodding would usually entail internal modifications to the amplifier. This could just be changing the odd resistor/pot/cap value to change drive levels, tone etc… Or it could actually be a change to the signal path itself, such as adding and extra gain stage or wiring two different inputs in parallel on older Marshall amps. Marshall with extra gain mod. The original intent of the term "modded Marshall' was to achieve the added gain without resorting to a pedal. For instance GnR album Appetite for Destruction, was recorded with a Hot Rodded JCM 800.</p>`
}, {
    id: ["HD2_AmpLine6Fatality", "HD2_PreampLine6Fatality"],
    basedOn: "Line 6 Original",
    manualUrl: "https://jasonshimmy.com/music/amps/line-6/fatality",
    synopsis: "<p>It's a heavily modified Mesa Rectifier. It sounds a bit like a Mark V Extreme setting.</p>"
}, {
    id: ["HD2_AmpTucknGo", "HD2_PreampTucknGo"],
    basedOn: "Ampeg® B-15NF Portaflex®",
    buyUrl: "https://amzn.to/3u5NGBH",
    manualUrl: "https://jasonshimmy.com/music/amps/ampeg/b-15nf-portaflex",
    notableUsers: "<p>If we had to sum up the amp's sound up in one sentence, we would simply say: Listen to James Jamerson's bass playing on the Motown®/Tamala records of the 1960's — The Supremes, The Four Tops, The Temptations, Marvin Gaye, Stevie Wonder, and many more. Jamerson played bass on more Motown hits than anyone else, and his choice for amplification was the Ampeg® B-15.</p>"
}, {
    id: ["HD2_AmpSVBeastNrm", "HD2_AmpSVBeastBrt", "HD2_PreampSVBeastNrm", "HD2_PreampSVBeastBrt"],
    basedOn: "Ampeg® SVT®",
    buyUrl: "https://amzn.to/37rH7Qh",
    manualUrl: "https://jasonshimmy.com/music/amps/ampeg/svt",
    synopsis: "<p>For 30 years now, we've heard the tone and felt the power of the mighty Ampeg® SVT® that model is based on. This workhorse has appeared on innumerable recordings and arena stages worldwide - there is no equal to the original SVT®  of pure tube magic.",
    notableUsers: '<p>Its users have included everyone from The Rolling Stones to Van Halen, and pretty much every "rock" bass player in between.</p></p>'
}, {
    id: ["HD2_AmpCaliBass", "HD2_PreampCaliBass"],
    basedOn: "MESA/Boogie® M9 Carbine",
    manualUrl: "https://jasonshimmy.com/music/amps/mesa-boogie/m9-carbine"
}, {
    id: ["HD2_AmpCali400Ch1", "HD2_AmpCali400Ch2", "HD2_PreampCali400Ch1", "HD2_PreampCali400Ch2"],
    basedOn: "MESA/Boogie® Bass 400+",
    manualUrl: "https://jasonshimmy.com/music/amps/mesa-boogie/bass-400plus",
    synopsis: "<p><strong>CHANNEL ONE:</strong> Volume 1 offer a high headroom preamp that you might find preferable for active type basses. The gain is slightly lower than Channel 2 and the tonal personality is slightly different. The Pull Bright switch built into Volume 1 can be great for funk bass, as it accentuates the harmonics above the Treble control region.</p><p><strong>CHANNEL TWO:</strong> Input 2 and Volume 2 recreate the classic sounds of the D-180, The gain is slightly higher and may be better suited for traditional basses than Channel One. But be certain to sample both channels because their tonal personalities are both very usable with very interesting differences. It is even possible to preset the two channels.</p>"
}, {
    id: ["HD2_AmpGCougar800", "HD2_PreampGCougar800"],
    basedOn: "Gallien-Krueger® GK 800RB",
    buyUrl: "https://amzn.to/3s6cU10",
    manualUrl: "https://jasonshimmy.com/music/amps/gallien-krueger/800rb",
    synopsis: "<p>Designed 20 years ago, the 800RB has long been a standard of the industry—the choice of countless bass players, touring bands, and backline companies. The amplifier head delivers 400W of biamp power in a rackmountable metal case, 3 voicing filters. Great deep, punchy sound. Roadworthy and studio friendly.",
    notableUsers: '<p>Geddy Lee had one. Will Lee used one on "Late Night With David Letterman". And bands like Def Leppard powered through a decade of pop metal with the 800RB.</p></p>'
}, {
    id: ["HD2_AmpWoodyBlue", "HD2_PreampWoodyBlue"],
    basedOn: "Acoustic® 360",
    manualUrl: "https://jasonshimmy.com/music/amps/acoustic/360",
    synopsis: '<p>This model is used for the bass in this video. For complete details, read the videos description on YouTube.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EmFP79KaZ9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    notableUsers: "<p>Larry Graham himself used these towering stacks for the thumb, the stank and the funk. Led Zeppelin's virtuosic bassist John Paul Jones had to keep up with Jimmy Page, for the love of Pete, and with the Acoustic 360. Jaco Pastorius saved all his money (legend has it, sleeping on the beach when his bandmates on the road slept in hotel beds) and eventually purchased an Acoustic 360, which gave Jaco's fretless J-bass that instantly-recognizable bump in the upper-mids that provided him bassdom's most enduring, original voice.</p>"
}, {
    id: ["HD2_AmpDelSol300", "HD2_PreampDelSol300"],
    basedOn: "Sunn® Coliseum 300",
    manualUrl: "https://jasonshimmy.com/music/amps/sunn/coliseum-300",
    synopsis: `<p>It's got a great strong tone, and the eq is extremely flexible and powerful.There are filters "in between" each band of the EQ, so they don't effect each other. You can boost the 62.5hz, and not effect the 125hz, so on. Which is the exact opposite of say, the Fender tone stack, where you turn down the mids to turn up the other stuff.</p>`
}, {
    id: ["HD2_AmpBusyOneCh1", "HD2_AmpBusyOneCh2", "HD2_AmpBusyOneJump", "HD2_PreampBusyOneCh1", "HD2_PreampBusyOneCh2", "HD2_PreampBusyOneJump"],
    basedOn: "Pearce BC-1",
    manualUrl: "https://jasonshimmy.com/music/amps/pearce/bc-1",
    synopsis: "<p>Very Rare Preamp made famous by Billy Sheehan. The Pearce Pre-amp is just a supremely great distortion and clean. This pre amp is solid state. It has 2 channels, which can be used separately or coupled, w/ built in distortion. It has a -10dB/0dB/+10dB switch (pretty cool if you need less or more punch without having to change your settings all the time). Each channel has a gain - bass - mid range - mid - treble  - volume controls and built in compressor/limiter with adjustable threshold. Each channel can be used separately, or combine them to create a wide range of tones.</p>"
}, {
    id: ["HD2_AmpAgua51", "HD2_PreampAgua51"],
    basedOn: "Aguilar® DB751",
    manualUrl: "https://jasonshimmy.com/music/amps/aguilar/db-751",
    buyUrl: "https://amzn.to/3stlAyR",
    synopsis: '<p>The Aguilar DB® 751 combines the legendary tube-driven tone of the DB® 750 with greater EQ control. A perfect combination of raw power and excellent tone, the DB® 751 continues the legacy set by the world famous DB® 750. Delivering 975 Watts at 2 ohms and 750 Watts at 4 ohms, this amp has the headroom you need to play any size venue.</p><p><strong>Deep Switch:</strong> Adds&nbsp;5 dB&nbsp;of broadband boost at 30 Hz</p><p><strong>Bright Switch:</strong> Adds 5 dB of broadband boost&nbsp;at 5-7 kHz</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tIy5cv93dCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}, {
    id: ["HD2_AmpArchetypeClean", "HD2_AmpArchetypeLead", "HD2_PreampArchetypeClean", "HD2_PreampArchetypeLead"],
    basedOn: "Paul Reed Smith® Archon®",
    buyUrl: "https://amzn.to/37s7w0e",
    manualUrl: "https://jasonshimmy.com/music/amps/paul-reed-smith/archon",
    synopsis: "<p>The Clean channel is rich a dimensional and stays clean to almost full volume. Reminiscent of the mesa and soldano cleans. The versatility of the three-band EQ lets you dial in tones from across the decades and across genres. The Lead channel starts out in hot-rodded Marshall territory and quickly works its way up into modern high gain tones. As long as you keep the Lead volume below noon, you can always clean things up with the volume knob on your guitar. If you crank the Lead volume beyond noon, totally higain.</p>"
}, {
    id: ["HD2_AmpLine6Litigator", "HD2_PreampLine6Litigator"],
    basedOn: "Line 6 Original inspired by boutique mid-gain amps",
    manualUrl: "https://jasonshimmy.com/music/amps/line-6/litigator",
    synopsis: "<p>Based on a heavily modded Fender and then hammered on and tweaked. It wouldn't be impossible to make in the physical world, but it might get a little messy. removing a lot of the noise and irregularities that people find unpleasant, but adding just enough of the wrong things so they enhance without being a distraction. It's like a vintage amp with movie magic color correction and hyped depth of field. Like a dirty Vintage Deluxe, dumble-esqe, very smooth, mid-gain, edge-of-breakup model. In the same general neighborhood as the Pete Anderson Deluxe model that was in the HD model packs, but with more gain on tap.</p>"
}, {
    id: ["HD2_AmpLine6Badonk", "HD2_PreampLine6Badonk"],
    basedOn: "Line 6 Original inspired by the original high gain Big Bottom model",
    manualUrl: "https://jasonshimmy.com/music/amps/line-6/badonk",
    synopsis: "<p>To create the Line 6 Badonk, the Big Bottom model from the XT code was rebuilt using new tools so that the overall EQ and pre-post distortion filtering matched. The previous tone stack was a little limited, so it was tuned up to have more range and provide a realistic, interactive response. To make this model feel more like a full amp, the power amp from the Fatality model (mesa rectifier mod) was added then tweaked slightly to reinforce the overall EQ curve of the Big Bottom. Tone Secret: The Big Bottom does not have a crap-load of low frequency. Instead, it is an amp with a slightly more than average amount of low end that can really hold together while being fed a lot of low frequency. It holds together well with heavily detuned guitars.</p>"
}, {
    id: ["HD2_AmpVoltageQueen", "HD2_PreampVoltageQueen"],
    basedOn: "Victoria® Electro King",
    manualUrl: "https://jasonshimmy.com/music/amps/victoria/electro-king",
    synopsis: "<p>The Electro King is an idealized recreation of the classic McCarty era GA-40. Its circa 1957 circuit features two cathode biased 6V6s for 15watts of recording and small club power.</p><p>The heart and soul of the Electro King is its 5879 preamp circuit; a single NOS 5879 input pentode for each of the normal and tremolo channels provides rich distortion and natural tube compression at any volume setting.</p><p>Notes seem to be 'blown' out of the amp with overdriven tones that are saturated, dynamic and musical.</p>",
    notableUsers: "Jeff Tweedy of the band Wilco uses one."
}, {
    id: ["HD2_AmpDerailedIngrid", "HD2_PreampDerailedIngrid"],
    basedOn: "Trainwreck Circuits® Express",
    manualUrl: "https://jasonshimmy.com/music/amps/trainwreck-circuits/express",
    synopsis: `<p>This model is used for the guitar tracks in this video. For complete details, read the videos description on YouTube.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EmFP79KaZ9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>Around 1984, Ken Fischer designed the Trainwreck Express. This design was born out of a collaboration with a client who was constantly seeking modifications for his 1959 Marshall Super Lead to emulate Eddie Van Halen's tone.</p><p>He tweaked the Plexi's preamp circuit to drastically increase the gain and harmonics, but the amp was then far too loud for of practical use.</p><p>To make the amp quieter, Fischer reduced the output by switching out the four EL34 tubes for 6V6s. The client preferred the EL34 tone, however, so Fischer decided to reduce the output stage to two EL34s.</p>`,
    notableUsers: "Brad Paisley, Mark Knopfler of Dire Straits, and Matt O'Ree (touring musician with Bon Jovi)"
}, {
    id: ["HD2_AmpBritTremNrm", "HD2_AmpBritTremBrt", "HD2_AmpBritTremJump", "HD2_PreampBritTremNrm", "HD2_PreampBritTremBrt", "HD2_PreampBritTremJump"],
    manualUrl: "https://jasonshimmy.com/music/amps/marshall/plexi",
    basedOn: "Marshall® Plexi Tremolo 50",
    buyUrl: "https://amzn.to/2M9nMMg",
    synopsis: '<p><strong>Video Examples</strong></p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/2xI-3MVs2UY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}, {
    id: ["HD2_AmpCartographer", "HD2_PreampCartographer"],
    basedOn: "Ben Adrian Cartographer",
    manualUrl: "https://jasonshimmy.com/music/amps/ben-adrian/cartographer",
    synopsis: "<p>A highly-modded, 50 watt Traynor head, the Cartographer was built by Ben Adrian for his band of the same name. Read more about it on Ben Adrian's blog linked above.</p>"
}, {
    id: ["HD2_AmpCaliTexasCh1", "HD2_AmpCaliTexasCh2", "HD2_PreampCaliTexasCh1", "HD2_PreampCaliTexasCh2"],
    basedOn: "MESA/Boogie® Lonestar",
    manualUrl: "https://jasonshimmy.com/music/amps/mesa-boogie/lonestar",
    synopsis: `<p>CHANNEL 1 epitomizes the best of Black Face: a punchy, shimmering twang that gives way to furry smoothness. It's based on a traditional vintage/boutique gain structure to produce angelic and warm clean sounds in its low to medium gain ranges. Like most great tube amps, this channel can be driven to clip and produces incredible solo possibilities for blues or root chording styles.</p><p>CHANNEL 2 has a split personality. At the flick of a switch, it can clone the clean magic of Channel 1 (with an added touch of blues-roots gain) or kick in an additional high-gain amplifier with its own dedicated control. With stunning performance inspired by the pivotal Mark I, the interaction of three cascading gain controls unlocks the historic vault of ground-breaking lead sounds.</p><p><strong>Video Examples</strong></p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8avf8ZI5zMU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}, {
    id: ["HD2_AmpPlacaterClean", "HD2_AmpPlacaterDirty", "HD2_PreampPlacaterClean", "HD2_PreampPlacaterDirty"],
    basedOn: "Friedman® BE-100",
    manualUrl: "https://jasonshimmy.com/music/amps/friedman/be-100",
    synopsis: `<p>Dave Friedman's "BE" circuit has been hailed as the epitome of British tone.&nbsp; In recent years, this tonal infusion has made the BE-100 one the most popular and sought after 100 Watt boutique amps.</p><p>Friedman's BE drive channels have earned their reputation for high-gain crunch, clarity and nuance. The clean channel has a crisp plexi tone.</p><p>See this video for an example:</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/QnoyFBcMt7I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}, {
    id: ["HD2_AmpFullertonNrm", "HD2_AmpFullertonBrt", "HD2_AmpFullertonJump", "HD2_PreampFullertonNrm", "HD2_PreampFullertonBrt", "HD2_PreampFullertonJump"],
    firmwareVersion: "2.80",
    basedOn: "1958 Fender® 5C3 Tweed Deluxe",
    buyUrl: "https://amzn.to/3pzP0sO",
    manualUrl: "https://jasonshimmy.com/music/amps/fender/deluxe",
    synopsis: '<p>Watch this video for a great overview of this amp:</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/diJwRZ_Jcyw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}, {
    id: ["HD2_AmpGrammaticoNrm", "HD2_AmpGrammaticoBrt", "HD2_AmpGrammaticoJump", "HD2_PreampGrammaticoNrm", "HD2_PreampGrammaticoBrt", "HD2_PreampGrammaticoJump"],
    firmwareVersion: "2.80",
    basedOn: "2016 Grammatico® LaGrange",
    manualUrl: "https://jasonshimmy.com/music/amps/grammatico/la-grange",
    synopsis: "<p>Based on a Tweed Deluxe and designed to capture the tones of early ZZ Top, Neil Young, Keith Richards, Tom Petty, George Thorogood, Kenny Burrell, T-Bone Walker, and many other classic rock tones when plugged straight into the amp. It accepts either single coils or humbuckers equally well.</p><p>The tone is very woody, warm, round, and fat with throaty mids and sweet rounded highs with just enough zing to make it exciting and cutting. It's very organic, transparent, three dimensional with lots of bloom and harmonic richness.</p>"
}, {
    id: ["HD2_AmpRevvGenRed", "HD2_PreampRevvGenRed"],
    firmwareVersion: "2.80",
    manualUrl: "https://jasonshimmy.com/music/amps/revv/generator-120",
    basedOn: "Gain 2 channel of the Revv® Generator 120",
    synopsis: "<p>The highest gain setting on the Revv Generator 120, the <strong>Red Channel</strong> has a touch-sensitive feel which takes you from warm old-school overdrive to the most massive modern tones available.</p>"
}, {
    id: ["HD2_AmpSVT4Pro", "HD2_PreampSVT4Pro"],
    firmwareVersion: "2.80",
    basedOn: "Ampeg® SVT-4 Pro",
    buyUrl: "https://amzn.to/37o7IgL",
    manualUrl: "https://jasonshimmy.com/music/amps/ampeg/svt4-pro",
    synopsis: "SVT-4 PRO offers an expansive palette of tonal options. The Frequency control allows you to select the center frequency for the Midrange control, giving you five distinct voicing options for the Midrange. And if that's not enough, you can use the 9-Band Graphic EQ to fine-tune your sound—or use it to set up a footswitchable “second channel” with a volume boost for your bass solo."
}, {
    id: ["HD2_AmpRevvGenPurple", "HD2_PreampRevvGenPurple"],
    firmwareVersion: "2.90",
    manualUrl: "https://jasonshimmy.com/music/amps/revv/generator-120",
    basedOn: "Gain 1 (purple) channel of the Revv® Generator 120",
    synopsis: '<p>The high gain <strong>Purple Channel</strong> is famous for its razor-sharp metal clarity, &amp; contains plenty of low end &amp; saturation without a loss in tightness.</p><p><strong>Video Examples</strong></p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/TLcUUwdT9nI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}, {
    id: ["HD2_AmpUSPrincess", "HD2_PreampUSPrincess"],
    firmwareVersion: "3.00",
    basedOn: "Fender® Princeton Reverb",
    buyUrl: "https://amzn.to/2NlTztV",
    manualUrl: "https://jasonshimmy.com/music/amps/fender/princeton",
    synopsis: `<p>A historically significant amp used on countless hit songs for decades. Today, the Princeton Reverb is as phenomenal looking, sounding and performing as ever, and is easily versatile enough to go from the living room to the recording studio to the gig with the great sound, style, reliability and authentic vintage vibe that Fender players know and love.&nbsp;</p><p>One of the coolest amps around, it's ideal for anyone who demands top-notch tube tone, naturally dynamic clean and overdriven sound, and unmistakable long-spring Fender reverb and tube vibrato.</p><p>This was one of the most popular additions to the Helix with firmware 3.0.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bnp0uTKALOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}, {
    id: ["HD2_AmpDasBenzinMega", "HD2_AmpDasBenzinLead", "HD2_PreampDasBenzinMega", "HD2_PreampDasBenzinLead"],
    firmwareVersion: "3.00",
    basedOn: "Diezel VH4",
    manualUrl: "https://jasonshimmy.com/music/amps/diezel/vh4",
    synopsis: "<p>The Mega channel delivers Diezel's trademark - highly-defined heavy metal rhythm sounds to soaring solo sounds.</p><p>The lead channel carries over from Mega, more gain, more compression, more bottom, more smooth top end - creamy, authoritative, loud.</p>"
}, {
    id: ["HD2_AmpMandarinRocker", "HD2_PreampMandarinRocker"],
    firmwareVersion: "3.10",
    basedOn: "Orange® Rockerverb 100 MKIII (Dirty Channel)",
    buyUrl: "https://amzn.to/3bMg3gZ",
    manualUrl: "https://jasonshimmy.com/music/amps/orange/rockerverb",
    synopsis: '<p>The original Rockerverb gained a cult following on account of its iconic high gain tones. The MKIII continue this tradition, but this amps is immensely flexible.</p><p>The Dirty channel goes anywhere from clean to crunch to the very heaviest modern saturation, and always maintains outstanding clarity.</p><p>The non-master volume Clean channel has been engineered to take on a more “sparkly” “chimey”, and "crisp" response but with greater control through a two band EQ section.</p><p><strong>Differences from actual amp:</strong></p><p>The amp model has a touch <strong>less</strong> low end than the unit that was actually modeled.</p><p>One other difference is that when gain is below 5 (i.e. switching to gain stage 1 from 2), the level is not rolled off nearly as fast as the actual amp. This for the sake of usability since it drops <strong>extremely</strong> <strong>fast</strong> once you get down there on the physical unit.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/9jpiheNGeZA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}, {
    id: ["HD2_AmpLine6Ventoux", "HD2_PreampLine6Ventoux"],
    firmwareVersion: "3.15",
    basedOn: "Line 6 Original",
    manualUrl: "https://jasonshimmy.com/music/amps/line-6/ventoux",
    synopsis: `<p>"The amp model name is Ventoux, which is a mountain in the south of France that is a legendary cycling climb. I did it in 2018 and it was awesome and very hard.</p><p>This model comes from a physical amp idea I had a while back. I was going to build it as a tube amp first. There are only so many hours in a day, though. The idea was to create a “coveted boutique amp” that had a different origin story. Most coveted boutique amps come from modified black panel Fenders or modified Marshall circuits. I wanted to do the same thing, but base it on the early 70s Orange circuits and the mid-wattage Fender Tweed circuits.</p><p>Ventoux has a unique topology. In an indirect way, every knob is kind of a gain/drive control. The tone controls adjust the character and/or amount of the overdrive in those frequencies. This might be seen as complicated by some, but I find it exciting and full of possibilities."</p><p>—Ben Adrian, Sound Design Manager</p><ul><li>Drive—Controls the amount of amp drive</li><li>HP Filter—Higher values result in tighter distortions and thinner cleans; lower values result in looser distortions and warmer cleans</li><li>Mid—Allows for more character than most. At lower values it's like the scooped sounds of traditional 60s Fender amps; at higher values it's flatter, like the 50s tweed amps that have very little tone-shaping in the circuits. Plus, a full-up mid sound will get a nice crunch when Drive is up</li><li>Presence/Depth—You may have noticed this amp was lacking regular bass and treble controls. That is accounted for with Depth and Presence controls; bass and treble for the power amp. These actually occur in the circuit just before phase inverter, but they really need the whole power amp to function. They also affect the character of the power amp distortion</li><li>Ch Vol—Sets the overall level of the Amp block</li><li>Master—Ventoux's Master volume exists in an "impossible" place for a physical amp. Generally, you'll want to leave this at 10.0, like a vintage amp with no master volume. However, a variety of textures can be had by reducing the level</li></ul>`
}, {
    id: ["HD2_AmpMoonNrm", "HD2_AmpMoonBrt", "HD2_AmpMoonJump"],
    firmwareVersion: "3.50",
    basedOn: "Sunn Model T",
    manualUrl: "https://jasonshimmy.com/music/amps/sunn/model-t",
    synopsis: '<p><i>“The Moon model is based on a 1974, silver knob Sunn Model T amplifier. This is the early version with the more traditional tone stack. Though it has been repaired over the years, the circuit has every component at stock value. This specific unit has been well used, well maintained, and regularly enveloped in fog.</i></p><p><i>"This amp circuit can best be described as a Fender Tweed Bassman/Marshall JTM45 preamp mated with a very high volume, very flat, ultralinear power amp that uses 6550 tubes. The result of this configuration is a tone with a raw growl that really has a strong punch to the gut. In addition, this configuration takes pedals very well; adding a distortion or booster can turn the amp into a high gain, doom machine."</i></p><p><i>—Ben Adrian, Sound Design Manager</i></p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jw08w-KWorc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}, {
    id: ["HD2_AmpPVVitriolClean", "HD2_AmpPVVitriolCrunch", "HD2_AmpPVVitriolLead"],
    firmwareVersion: "3.50 & 3.70",
    basedOn: "Peavey Invective",
    buyUrl: "https://amzn.to/3g2EjjH",
    manualUrl: "https://jasonshimmy.com/music/amps/peavey/invective",
    synopsis: '<p>Peavey designed this 6L6 tube-powered monster in collaboration with Misha Mansoor of Periphery, with the goal of offering no-compromise, high-gain performance and flexibility.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/peLMJx0u48E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}, {
    id: ["HD2_AmpGSG100", "HD2_PreampGSG100"],
    firmwareVersion: "3.60",
    basedOn: "Grammatico GSG100",
    manualUrl: "https://jasonshimmy.com/music/amps/grammatico/gsg100",
    synopsis: `<p>The GSG100 is an authentic recreation of a Dumble Overdrive Special using the same vintage components acquired over decades as used in the late 70's - early 80's era Dumble amps. Painstaking and meticulously studied to learn and capture the tone as verified in side by side tests.</p><p>—</p><p><i>Per Ben Adrian, Sound Design Manager:&nbsp;</i></p><p><i>The Grammatico GSG100 is an amp based on the study of Dumble amps made around 1980. This model aims to capture all the unique details of this amplifier circuit, many of which are quite different than popular guitar amps from the major companies. The GSG100 is a feature-rich and complicated amp. There are many amazing sounds in the amp; however, the controls allow for such a wide range of adjustment that it's possible to get unpleasant sounds from it as well. To best use the amp, it really helps to know exactly what each of these features is doing to the guitar signal. Let's go through the parameters as they are found in the Helix model:</i></p><ul><li><strong>Drive</strong>—This is the first volume control on the amp. It's called "drive" on the model to fit the pattern of all the Helix models. On the real amp is says "Volume."</li><li><strong>Bass, Mid, Treble</strong>—The normal tone controls on the amp (called a tone stack by amp nerds), located between the first and second gain stages in the preamp. These have different ranges than traditional guitar amp tone controls. Also, the whole voicing of the tone stack can be changed with the "Rock/Jazz" switch, which will be explained later.</li><li><strong>Presence</strong>—This is like the presence controls on other guitar amps. It changes the amount of high frequency in the power amp by modifying the EQ filtering in the power amp's negative feedback loop.</li><li><strong>Ch Vol</strong>—This controls the output level of the amp model. It has no effect on the tone or distortion of the amp model</li><li><strong>Master</strong>—This is the master volume on the front panel of the amp. It is located between the preamp and power amp and can be used to get more or less power amp distortion. This amp is VERY loud, and most players would probably run the master volume on the lower side. If the master volume is cranked, the power amp distortion can be pushed into unpleasant territory. Most players would never crank the master in real life as the actual output would be way too loud for most musical settings.</li><li><strong>Mid Switch</strong>—This switch changes the value of the treble capacitor in the tone stack. When it is off, the amp has more of a scooped sound. When it is on, there is a noticeable upper-mid boost.</li><li><strong>Jazz/Rock</strong>—This switch changes the wiring of the tone stack circuit. It allows for two totally separate tonal voices. Jazz is quieter with a lower center frequency for the mids. Rock is louder with a more traditional mid frequency center. Tone controls rarely translate well between the Jazz and Rock settings. If a good sound is achieved in one mode, it is not guaranteed that the same settings in the opposite mode will still sound pleasing.</li><li><strong>OD Switch</strong>—This turns the two-gain-stage tube overdrive circuit on and off. This circuit is located AFTER the tone controls and Drive knob. When the overdrive is turned on it's as if a third and fourth gain stage is added to the preamp. Generally, it's best to set up the base tone of the amp with the Drive and tone controls first, and then adjust the overdrive circuit to work with the desired base tone.</li><li><strong>OD Drive</strong>—This controls the amount of drive or saturation in the overdrive circuit. Since the whole overdrive circuit is after the amp's regular drive and tone controls, the range of OD Drive knob will change based on those earlier knob settings.</li><li><strong>OD Level</strong>—This controls the output level of the overdrive circuit.</li><li><strong>Bright</strong>—This is a three position switch. The settings are "off" and two different values of bright capacitor. This bright capacitor works with the Drive (volume) knob earlier in the circuit, and is similar to other amps that have bright switches. When the Bright switch is engaged, the effect is more pronounced with lower Drive settings. The bright becomes less effective at higher Drive settings. When the Drive is at 10, the switch is effectively removed from the amp circuit, and changing the switch settings has no audible effect.</li><li><strong>FET Boost</strong>—The GSG100 has a solid state, FET (Field Effect Transistor) boost circuit at the very beginning of the amp circuit. It is akin to placing a FET Boost pedal before the amp. On the physical unit there are two input jacks, but on the model it is placed on a switch and can even be made foot-switchable. The FET Boost has a fixed boost amount of about 7 to 9 dB and also gives a slight EQ change.</li><li><strong>PAB</strong>—This stands for "Preamp Boost." The PAB works by removing the tone controls from the circuit. Tone controls work by removing frequencies and signal level. Engaging the PAB circuit returns all of this lost signal level, but the side effect is that tone controls no longer work. It truth, the treble knob does work slightly, and the mid switch will change how much lows and mids comes through the circuit. In general, though, the PAB trades tone control functionality for a full blast level between tube gain stages 1 and 2.</li><li><strong>Sag</strong>—This is a control that is added to all the Helix models. Every tube amp has some amount of power supply sag, which feels like compression, squish, and sustain to the player. This control makes the sag amount user-adjustable.</li><li><strong>Hum</strong>—This is a control that is added to most of the Helix models. Preamp tube heaters in tube amps will leak a little bit of 60 cycle hum into the audio signal. When this hum mixes with the distorted audio signal, a non-musical distortion is created at low levels. To some players, this low-level, non-harmonic distortion adds a bit of realism to the amp model. The best way to put it is that sometimes the model sounds more "wrong" without the hum. However, if you don't like it, you can just turn it down.</li><li><strong>Ripple</strong>—This is a control that is added to most of the Helix models. Power amp circuits will sometimes let a little bit of rectified 120Hz hum (that the power supply filter caps can't quite fully remove) into the audio signal. When the power supply is being pushed hard, more of this ripple can get through the audio path. Much like the hum, this provides a bit of non-musical distortion to the power amp at distorted settings. To some people, this sounds like harmonic complexity that is enjoyable and realistic. Other players just don't like it and turn it off.</li><li><strong>Bias</strong>—This control is in most Helix models. It adjusts the bias of the tubes in the power amp, causing a change in tonality and the distortion characteristic.</li><li><strong>Bias X</strong>—This is the most difficult parameter to describe in Helix models, so hang on. All tube amps need to bias the power amp tubes. This is usually achieved by applying a negative voltage to the input audio signal. (Cathode bias works differently, but that's a story for a different time.) However, when the power tubes are distorting, free electrons can form around the input grid and cause a shift in the bias voltage. This shift only happens during the moments when distortion is occurring. This shift causes a tonal and texture change much like adjusting the bias control. However, once the tubes leave the distorted state, the free electrons dissipate and the bias returns to normal. Another way to put it (less accurately) is that this is a level/envelope controlled bias shift. This behavior is modeled in all Helix amps, and the Bias X control allows users to control the amount of bias shift that is happening. It is a very subtle change, so please don't expect high drama from this knob.</li></ul>`
}, {
    id: ["HD2_AmpLine6Elmsley", "HD2_PreampLine6Elmsley"],
    firmwareVersion: "3.60",
    basedOn: "Line 6 Original",
    manualUrl: "https://jasonshimmy.com/music/amps/line-6/elmsley",
    synopsis: `<p>"The Line 6 Elmsley is a new Line 6 original amplifier that employs a parallel distortion topology that layers distinct saturation characteristics across the lower and upper registers. The Elmsley features a smooth and present bottom end with some exceptional sparkle and definition all through the midrange and above. The result is an amplifier that is dazzling across the full spectrum, and the amplifier deals with pedals in spades.</p><p>"The other new key feature of The Elmsley's power amp section is the Negative Feedback (NFB) parameter, where the amount of feedback within the power section's response can be dialed anywhere from wild and unhinged, tight and punchy, and anything in between. As with many amplifier designs, the presence and depth controls are part of this negative feedback circuit and functions to control the brilliance and resonance of the power amp, respectively. As the NFB param is reduced, the presence and depth controls' influences are also influenced, and they become effectively deactivated when the NFB knob is at zero. These interactions allow the player to create countless tonal variations to suit their needs.”</p><p>—Sam Hwang, Sound Designer</p>`
}, {
    id: ["HD2_AmpAguaSledge", "HD2_PreampAguaSledge"],
    firmwareVersion: "3.60",
    basedOn: "Aguilar Tone Hammer",
    manualUrl: "https://jasonshimmy.com/music/amps/aguilar/tone-hammer",
    buyUrl: "https://amzn.to/3MvZp88",
    synopsis: "Featuring fully sweepable midrange frequencies in addition to bass and treble controls the Tone Hammer gives you studio-inspired EQ. To give this tone shaping unit the ultimate flexibility Aguilar introduced their proprietary Adaptive Gain Shaping circuitry (AGS). AGS allows the player to kick in an additional gain structure allowing you to go from modern tones to vintage, tube-like saturation. The Tone Hammer has plenty of headroom to reproduce the most dynamic playing styles and it robust design makes this pedal truly roadworthy."
}, {
    id: ["HD2_PreampBrit2203", "HD2_AmpBrit2203"],
    firmwareVersion: "3.70",
    basedOn: "100W Marshall JCM-800 Stock 2203",
    manualUrl: "https://jasonshimmy.com/music/amps/marshall/jcm-800",
    buyUrl: "https://amzn.to/3W5BksR",
    synopsis: "<p>Nothing embodies the essence of Marshall's legendary tone than the JCM800 2203 guitar amplifier head. With just one channel, a 3-band EQ for tone shaping, and 100-watts of power, you've got everything you need to pound out classic tones from crunchy blues to screaming leads and beyond.</p>"
}, {
    id: ["HD2_PreampUSDripmanNorm", "HD2_AmpUSDripmanNorm"],
    firmwareVersion: "3.70",
    basedOn: "Fender Bassman (Silverface)",
    manualUrl: "https://jasonshimmy.com/music/amps/fender/bassman",
    buyUrl: "https://amzn.to/3ZGHaBj",
    synopsis: "<p>The Fender Bassman&nbsp;is a legendary guitar amp known to both guitar and bass players. It was&nbsp;introduced in 1951,&nbsp;primarily&nbsp;targeted for bass guitar players and&nbsp;promoted as&nbsp;a bass amp&nbsp;for the Fender Precision Bass guitar, the first mass-produced electric bass guitar ever.</p><p>It has been heavily used by guitar players as well including Roy Buchanan, Howard Leese with Heart, Robbie Robertson, Bruce Springsteen, Mike Ness of Social Distortion, Jimmie and Steve Ray Vaughan, and many others.&nbsp;</p>"
}, {
    id: ["HD2_PreampMandarinBass200", "HD2_AmpMandarinBass200"],
    firmwareVersion: "3.70",
    basedOn: "Orange AD200 MkIII",
    manualUrl: "https://jasonshimmy.com/music/amps/orange/ad200",
    buyUrl: "https://amzn.to/4j2XdTk",
    synopsis: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/OgN99KO4PCE?si=yTIvZB3sKBkGUtpi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
}, {
    id: ["HD2_PreampLine6Clarity", "HD2_PreampLine6Aristocrat", "HD2_PreampLine6Carillon", "HD2_PreampLine6Voltage", "HD2_PreampLine6Kinetic", "HD2_PreampLine6Oblivion", "HD2_AmpLine6Clarity", "HD2_AmpLine6Aristocrat", "HD2_AmpLine6Carillon", "HD2_AmpLine6Voltage", "HD2_AmpLine6Kinetic", "HD2_AmpLine6Oblivion"],
    firmwareVersion: "3.70",
    basedOn: "Line 6 Catalyst",
    manualUrl: "https://jasonshimmy.com/music/amps/line-6/catalyst",
    buyUrl: "https://amzn.to/3PH523b",
    synopsis: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Kk8XD6i5FyI?si=qesgxDrBLM2IcYX9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><p>The six Original Amp Designs in Helix/HX 3.70 (Clarity, Aristocrat, Carillon, Voltage, Kinetic, and Oblivion) are taken from Line 6's popular line of Catalyst guitar amps. Each boasts a unique, integrated boost circuit optimized specifically for that amp. You can assign the Boost parameter to a stomp switch:</p><ul><li>Select one of the six Original Amp Design models below.</li><li>Press and hold the Boost knob. Helix/HX jumps to the Controller Assign screen.</li><li>(HX only: Press PAGE &gt; to show the Learn knob.) Press Learn.</li><li>Press the desired stomp switch. Helix/HX automatically assigns it. If you like, adjust Min Value and Max Value to dial in how much boost you want.</li><li>Press HOME to exit. Wonder to yourself "wait, it's that easy to assign any parameter in Helix/HX to a stomp switch? Why haven't I done this before?"—OR—ponder "I'm a power user who knows all the shortcuts. I should assign parameters to switches more often."</li></ul>`
}, {
    id: ["HD2_PreampUSSuperNorm", "HD2_AmpUSSuperNorm"],
    firmwareVersion: "3.80",
    basedOn: "Fender Super Reverb normal channel",
    manualUrl: "https://jasonshimmy.com/music/amps/fender/super",
    buyUrl: "https://amzn.to/4bUELYq",
    synopsis: "The Fender Super Reverb guitar amplifier is a renowned model that has been a staple for guitarists since its introduction in the mid-1960s. Known for its rich, clean tones and powerful reverb, the Super Reverb features a 4x10 speaker configuration with Jensen P10R speakers, providing a distinctive, chimey sound. The amp offers two channels (normal and vibrato) with controls for volume, treble, bass, and additional reverb and tremolo effects on the vibrato channel. The modern Tone Master Super Reverb replicates this classic tube amp's sound using advanced modeling technology, making it lighter and more versatile for contemporary use, including selectable output power and direct line-out for recording or live performance.",
    notableUsers: "Notable users include Stevie Ray Vaughan, Jimmie Vaughan, Johnny Marr, Lee Ranaldo, and Freddie King, among others."
}, {
    id: ["HD2_PreampUSSuperVib", "HD2_AmpUSSuperVib"],
    firmwareVersion: "3.80",
    basedOn: "Fender Super Reverb vibrato channel",
    manualUrl: "https://jasonshimmy.com/music/amps/fender/super",
    buyUrl: "https://amzn.to/4bUELYq",
    synopsis: "The Fender Super Reverb guitar amplifier is a renowned model that has been a staple for guitarists since its introduction in the mid-1960s. Known for its rich, clean tones and powerful reverb, the Super Reverb features a 4x10 speaker configuration with Jensen P10R speakers, providing a distinctive, chimey sound. The amp offers two channels (normal and vibrato) with controls for volume, treble, bass, and additional reverb and tremolo effects on the vibrato channel. The modern Tone Master Super Reverb replicates this classic tube amp's sound using advanced modeling technology, making it lighter and more versatile for contemporary use, including selectable output power and direct line-out for recording or live performance.",
    notableUsers: "Notable users include Stevie Ray Vaughan, Jimmie Vaughan, Johnny Marr, Lee Ranaldo, and Freddie King, among others."
}, {
    id: ["HD2_PreampGermanXtraBlue", "HD2_AmpGermanXtraBlue"],
    firmwareVersion: "3.80",
    basedOn: "Bogner Ecstasy 101B Blue channel",
    manualUrl: "https://jasonshimmy.com/music/amps/bogner/ecstasy-101b",
    buyUrl: "https://amzn.to/4a8FCpi",
    synopsis: "The Bogner Ecstasy 101B guitar amplifier is a versatile, high-performance amp head known for its exceptional tonal range and flexibility. This 100-watt tube amp features three channels, each with three gain levels, allowing guitarists to switch between clean, overdrive, and high-gain tones effortlessly. It includes EL34 power tubes and 12AX7 preamp tubes, providing a rich, dynamic sound. The Ecstasy 101B offers a Class A/AB switch, a half-power switch, and a Plexi mode, enabling users to achieve both vintage and modern tones. Additional features include dual presence controls, a tube-driven effects loop, and a comprehensive footswitch for easy control. This amp is highly regarded by professional musicians for its ability to deliver a wide array of sounds, making it suitable for various musical styles.",
    notableUsers: "The Bogner Ecstasy 101B amplifier is favored by renowned guitarists across diverse genres. Notable users include Steve Vai, Steve Lukather, Matt Pike, Dan Donegan, Mami Sasazaki, and Neil Westfall."
}, {
    id: ["HD2_PreampGermanXtraRed", "HD2_AmpGermanXtraRed"],
    firmwareVersion: "3.80",
    basedOn: "Bogner Ecstasy 101B Red channel",
    manualUrl: "https://jasonshimmy.com/music/amps/bogner/ecstasy-101b",
    buyUrl: "https://amzn.to/4a8FCpi",
    synopsis: "The Bogner Ecstasy 101B guitar amplifier is a versatile, high-performance amp head known for its exceptional tonal range and flexibility. This 100-watt tube amp features three channels, each with three gain levels, allowing guitarists to switch between clean, overdrive, and high-gain tones effortlessly. It includes EL34 power tubes and 12AX7 preamp tubes, providing a rich, dynamic sound. The Ecstasy 101B offers a Class A/AB switch, a half-power switch, and a Plexi mode, enabling users to achieve both vintage and modern tones. Additional features include dual presence controls, a tube-driven effects loop, and a comprehensive footswitch for easy control. This amp is highly regarded by professional musicians for its ability to deliver a wide array of sounds, making it suitable for various musical styles.",
    notableUsers: "The Bogner Ecstasy 101B amplifier is favored by renowned guitarists across diverse genres. Notable users include Steve Vai, Steve Lukather, Matt Pike, Dan Donegan, Mami Sasazaki, and Neil Westfall."
}, {
    id: ["HD2_PreampEVPanamaBlue", "HD2_AmpEVPanamaBlue"],
    firmwareVersion: "3.80",
    basedOn: "EVH 5150III 100 [6L6] Blue channel",
    manualUrl: "https://jasonshimmy.com/music/amps/evh/5150",
    buyUrl: "https://amzn.to/46f2YYj",
    synopsis: "The EVH 5150III 100 [6L6] guitar amplifier is a powerful 100-watt tube amp designed for versatility and high-performance sound. Featuring three channels—clean, crunch, and lead—it offers a wide range of tones suitable for various musical styles. The amp is equipped with dual-concentric controls for independent gain and volume adjustments on the first two channels, while the lead channel has its own dedicated controls. With EL34 power tubes, the 5150III delivers a dynamic sound characterized by articulate highs and robust lows. Additional features include a global presence and resonance control, an effects loop, and MIDI compatibility, making it a favorite among professional guitarists seeking a reliable and expressive amplifier.",
    notableUsers: "The EVH 5150III 100 [6L6] guitar amplifier is endorsed by several prominent musicians, including Eddie Van Halen, who co-designed the amp and is known for its versatile tone. Alex Lifeson utilizes it for a wide range of sounds, while Kirk Hammett appreciates its aggressive, dynamic capabilities. Steve Vai values the amp's versatility across various styles, and Derek Trucks uses it for its rich tonal palette. These artists rely on the 5150III to achieve their signature sounds in a variety of genres."
}, {
    id: ["HD2_PreampEVPanamaRed", "HD2_AmpEVPanamaRed"],
    firmwareVersion: "3.80",
    basedOn: "EVH 5150III 100 [6L6] Red channel",
    manualUrl: "https://jasonshimmy.com/music/amps/evh/5150",
    buyUrl: "https://amzn.to/46f2YYj",
    synopsis: "The EVH 5150III 100 [6L6] guitar amplifier is a powerful 100-watt tube amp designed for versatility and high-performance sound. Featuring three channels—clean, crunch, and lead—it offers a wide range of tones suitable for various musical styles. The amp is equipped with dual-concentric controls for independent gain and volume adjustments on the first two channels, while the lead channel has its own dedicated controls. With EL34 power tubes, the 5150III delivers a dynamic sound characterized by articulate highs and robust lows. Additional features include a global presence and resonance control, an effects loop, and MIDI compatibility, making it a favorite among professional guitarists seeking a reliable and expressive amplifier.",
    notableUsers: "The EVH 5150III 100 [6L6] guitar amplifier is endorsed by several prominent musicians, including Eddie Van Halen, who co-designed the amp and is known for its versatile tone. Alex Lifeson utilizes it for a wide range of sounds, while Kirk Hammett appreciates its aggressive, dynamic capabilities. Steve Vai values the amp's versatility across various styles, and Derek Trucks uses it for its rich tonal palette. These artists rely on the 5150III to achieve their signature sounds in a variety of genres."
}]
const Jy = [{
    id: "HD2_Cab1x6x9SoupProEllipse",
    basedOn: '1x6x9" Supro® S6616'
}, {
    id: "HD2_Cab1x8SmallTweed",
    basedOn: '1x8" Fender® Champ'
}, {
    id: "HD2_Cab1x12FieldCoil",
    basedOn: '1x12" Gibson® EH185'
}, {
    id: "HD2_Cab1x12USDeluxe",
    basedOn: '1x12" Fender® Deluxe Oxford'
}, {
    id: "HD2_Cab1x12Celest12H",
    basedOn: '1x12" ÷13 JRT 9/15 G12 H30'
}, {
    id: "HD2_Cab1x12BlueBell",
    basedOn: '1x12" Vox® AC-15 Blue'
}, {
    id: "HD2_Cab1x12Lead80",
    basedOn: '1x12" Bogner® Shiva CL80'
}, {
    id: "HD2_Cab2x12DoubleC12N",
    basedOn: '2x12" Fender® Twin C12N'
}, {
    id: "HD2_Cab2x12MailC12Q",
    basedOn: '2x12" Silvertone® 1484'
}, {
    id: "HD2_Cab2x12Interstate",
    basedOn: '2x12" Dr Z® Z Best V30'
}, {
    id: "HD2_Cab2x12JazzRivet",
    basedOn: '2x12" Roland® JC-120'
}, {
    id: "HD2_Cab2x12SilverBell",
    basedOn: '2x12" Vox® AC-30TB Silver'
}, {
    id: "HD2_Cab2x12BlueBell",
    basedOn: '2x12" Vox® AC-30 Fawn Blue'
}, {
    id: "HD2_Cab4x10TweedP10R",
    basedOn: '4x10" Fender® Bassman® P10R'
}, {
    id: "HD2_Cab4x12WhoWatt100",
    basedOn: '4x12" Hiwatt® AP Fane®'
}, {
    id: "HD2_Cab4x12MandarinEM",
    basedOn: '4x12" Orange® Eminence'
}, {
    id: "HD2_Cab4x12Greenback25",
    basedOn: '4x12" Marshall® Basketweave G12 M25'
}, {
    id: "HD2_Cab4x12Greenback20",
    basedOn: '4x12" Marshall® Basketweave G12 M20'
}, {
    id: "HD2_Cab4x12Blackback30",
    basedOn: '4x12" Park® 75 G12 H30'
}, {
    id: "HD2_Cab4x121960T75",
    basedOn: '4x12" Marshall® 1960 AT75'
}, {
    id: "HD2_Cab4x12UberV30",
    basedOn: '4x12" Bogner® Uberkab V30'
}, {
    id: "HD2_Cab4x12UberT75",
    basedOn: '4x12" Bogner® Uberkab T75'
}, {
    id: "HD2_Cab4X12CaliV30",
    basedOn: '4x12" MESA/Boogie® 4FB V30'
}, {
    id: "HD2_Cab4x12XXLV30",
    basedOn: '4x12" ENGL® XXL V30'
}, {
    id: "HD2_Cab4x12SoloLeadEM",
    basedOn: '4x12" Soldano'
}, {
    id: "HD2_Cab1x15TucknGo",
    basedOn: '1x15" Ampeg® B-15'
}, {
    id: "HD2_Cab2x15Brute",
    basedOn: '2x15" MESA/Boogie® 2x15 EV'
}, {
    id: "HD2_Cab4x10Rhino",
    basedOn: '4x10" Ampeg® SVT® 410HLF'
}, {
    id: "HD2_Cab6x10CaliPower",
    basedOn: '6x10" MESA/Boogie® Power House'
}, {
    id: "HD2_Cab8x10SVBeast",
    basedOn: '8x10" Ampeg® SVT®',
    synopsis: '<p>This model is used for the bass in this video. For complete details, read the videos description on YouTube.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EmFP79KaZ9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}, {
    id: "HD2_Cab1x12CaliIV",
    basedOn: 'MESA/Boogie® Mk IV 12"'
}, {
    id: "HD2_Cab1x12CaliExt",
    basedOn: 'MESA/Boogie® 12" extension (EVM12L speaker)'
}, {
    id: "HD2_Cab1x12MatchH30",
    basedOn: 'Matchless® DC-30 (12" G12H30 speaker)'
}, {
    id: "HD2_Cab1x12MatchG25",
    basedOn: 'Matchless® DC-30 (12" Greenback 25 speaker)'
}, {
    id: "HD2_Cab1x12DelSol",
    basedOn: 'Sunn® Coliseum 300 bass cab (12" speaker)'
}, {
    id: "HD2_Cab1x18DelSol",
    basedOn: 'Sunn® Coliseum 300 bass cab (18" speaker)'
}, {
    id: "HD2_Cab1x18WoodyBlue",
    basedOn: 'Acoustic® 360 18" bass cab'
}, {
    id: "HD2_Cab1x12Fullerton5C3",
    firmwareVersion: "2.90",
    basedOn: "Classic 1953 Fender® 5C3 Tweed Deluxe"
}, {
    id: "HD2_Cab1x12Grammatico5E3",
    firmwareVersion: "2.90",
    basedOn: "Modern 2016 Grammatico LaGrange"
}, {
    id: "HD2_Cab1x10PrincessCopperhead",
    firmwareVersion: "3.00",
    basedOn: "Fender® Princeton Reverb cab"
}, {
    id: "HD2_Cab1x12PrincessBlue",
    firmwareVersion: "3.00",
    basedOn: 'Fender® Princeton Reverb with a 12" Alnico Blue driver'
}, {
    id: ["HD2_CabMicIr_1x10USPrincess", "HD2_CabMicIr_1x10USPrincessWithPan"],
    firmwareVersion: "3.50",
    basedOn: '1x10" Fender Princeton Eminence Copperhead'
}, {
    id: ["HD2_CabMicIr_1x12Grammatico", "HD2_CabMicIr_1x12GrammaticoWithPan"],
    firmwareVersion: "3.50",
    basedOn: '1x12" Grammatico LaGrange P12Q'
}, {
    id: ["HD2_CabMicIr_1x12USDeluxe", "HD2_CabMicIr_1x12USDeluxeWithPan"],
    firmwareVersion: "3.50",
    basedOn: '1x12" Fender® Deluxe Oxford'
}, {
    id: ["HD2_CabMicIr_1x12CaliEXT", "HD2_CabMicIr_1x12CaliEXTWithPan"],
    firmwareVersion: "3.50",
    basedOn: '1x12" Mesa Boogie Extension Cab'
}, {
    id: ["HD2_CabMicIr_2x12BlueBell", "HD2_CabMicIr_2x12BlueBellWithPan"],
    firmwareVersion: "3.50",
    basedOn: '2x12" Vox® AC-30 Fawn Blue'
}, {
    id: ["HD2_CabMicIr_2x12DoubleC12N", "HD2_CabMicIr_2x12DoubleC12NWithPan"],
    firmwareVersion: "3.50",
    basedOn: '2x12" Fender Twin C12N'
}, {
    id: ["HD2_CabMicIr_2x12JazzRivet", "HD2_CabMicIr_2x12JazzRivetWithPan"],
    firmwareVersion: "3.50",
    basedOn: ' 2x12" Roland® JC-120'
}, {
    id: ["HD2_CabMicIr_2x12MailC12Q", "HD2_CabMicIr_2x12MailC12QWithPan"],
    firmwareVersion: "3.50",
    basedOn: ' 2x12" Silvertone® 1484'
}, {
    id: ["HD2_CabMicIr_2x12Mandarin", "HD2_CabMicIr_2x12MandarinWithPan"],
    firmwareVersion: "3.50",
    basedOn: '2x12" Orange PPC212 V30'
}, {
    id: ["HD2_CabMicIr_4x10TweedP10R", "HD2_CabMicIr_4x10TweedP10RWithPan"],
    firmwareVersion: "3.50",
    basedOn: '4x12" Fender® Bassman® P10R'
}, {
    id: ["HD2_CabMicIr_4x12Greenback25", "HD2_CabMicIr_4x12Greenback25WithPan"],
    firmwareVersion: "3.50",
    basedOn: '4x12" Marshall® Basketweave G12 M25'
}, {
    id: ["HD2_CabMicIr_4x121960AT75", "HD2_CabMicIr_4x121960AT75WithPan"],
    firmwareVersion: "3.50",
    basedOn: '4x12" Marshall® 1960A T75'
}, {
    id: ["HD2_CabMicIr_4x12BlackbackH30", "HD2_CabMicIr_4x12BlackbackH30WithPan"],
    firmwareVersion: "3.50",
    basedOn: '4x12" Park® 75 G12 H30'
}, {
    id: ["HD2_CabMicIr_4x12BritV30", "HD2_CabMicIr_4x12BritV30WithPan"],
    firmwareVersion: "3.50",
    basedOn: '4x12" Marshall® 1960AV V30'
}, {
    id: ["HD2_CabMicIr_4x12CaliV30", "HD2_CabMicIr_4x12CaliV30WithPan"],
    firmwareVersion: "3.50",
    basedOn: ' 4x12" MESA/Boogie® 4FB V30'
}, {
    id: ["HD2_CabMicIr_4x12Mandarin", "HD2_CabMicIr_4x12MandarinWithPan"],
    firmwareVersion: "3.50",
    basedOn: '4x12" Orange® Eminence'
}, {
    id: ["HD2_CabMicIr_4x12MOONT75", "HD2_CabMicIr_4x12MOONT75WithPan"],
    firmwareVersion: "3.50",
    basedOn: ' 4x12" Sunn Cab w/G75T'
}, {
    id: ["HD2_CabMicIr_4x12UberT75", "HD2_CabMicIr_4x12UberT75WithPan"],
    firmwareVersion: "3.50",
    basedOn: '4x12" Bogner® Uberkab T75'
}, {
    id: ["HD2_CabMicIr_4x12UberV30", "HD2_CabMicIr_4x12UberV30WithPan"],
    firmwareVersion: "3.50",
    basedOn: '4x12" Bogner® Uberkab V30'
}, {
    id: ["HD2_CabMicIr_4x12XXLV30", "HD2_CabMicIr_4x12XXLV30WithPan"],
    firmwareVersion: "3.50",
    basedOn: '4x12" ENGL® XXL V30'
}, {
    id: ["HD2_CabMicIr_1x15AmpegB15", "HD2_CabMicIr_1x15AmpegB15WithPan"],
    firmwareVersion: "3.50",
    basedOn: '1x15" Ampeg® B-15'
}, {
    id: ["HD2_CabMicIr_2x15Brute", "HD2_CabMicIr_2x15BruteWithPan"],
    firmwareVersion: "3.50",
    basedOn: '2x15" MESA/Boogie® 2x15 EV'
}, {
    id: ["HD2_CabMicIr_4x10Garden", "HD2_CabMicIr_4x10GardenWithPan"],
    firmwareVersion: "3.50",
    basedOn: '4x10" Eden D410XLT'
}, {
    id: ["HD2_CabMicIr_8x10SVTAV", "HD2_CabMicIr_8x10SVTAVWithPan"],
    firmwareVersion: "3.50",
    basedOn: '8x10" Ampeg® SVT® (SVT-810AV Heritage Edition)'
}, {
    id: ["HD2_CabMicIr_1x12BlueBell", "HD2_CabMicIr_1x12BlueBellWithPan"],
    firmwareVersion: "3.60",
    basedOn: '1x12" Vox AC-15 Blue Alnico'
}, {
    id: ["HD2_CabMicIr_1x12OpenCream", "HD2_CabMicIr_1x12OpenCreamWithPan"],
    firmwareVersion: "3.60",
    basedOn: 'Custom 1x12" open-back cab G12M-65'
}, {
    id: ["HD2_CabMicIr_1x12OpenCast", "HD2_CabMicIr_1x12OpenCastWithPan"],
    firmwareVersion: "3.60",
    basedOn: 'Custom 1x12" open-back cab EVM12L'
}, {
    id: ["HD2_CabMicIr_2x12SilverBell", "HD2_CabMicIr_2x12SilverBellWithPan"],
    firmwareVersion: "3.60",
    basedOn: '2x12" Vox AC-30TB Silver Alnico'
}, {
    id: ["HD2_CabMicIr_2x12MatchH30", "HD2_CabMicIr_2x12MatchH30WithPan"],
    firmwareVersion: "3.60",
    basedOn: '2x12" Matchless DC-30 custom G12H-30'
}, {
    id: ["HD2_CabMicIr_2x12MatchG25", "HD2_CabMicIr_2x12MatchG25WithPan"],
    firmwareVersion: "3.60",
    basedOn: '2x12" Matchless DC-30 custom G12M-25'
}, {
    id: ["HD2_CabMicIr_4x12Greenback20", "HD2_CabMicIr_4x12Greenback20WithPan"],
    firmwareVersion: "3.60",
    basedOn: '4x12" Marshall "basketweave" G12M-20'
}, {
    id: ["HD2_CabMicIr_1x12Epicenter", "HD2_CabMicIr_1x12EpicenterWithPan"],
    firmwareVersion: "3.60",
    basedOn: '1x12" Epifani Ultralight series'
}, {
    id: ["HD2_CabMicIr_4x10AmpegPro", "HD2_CabMicIr_4x10AmpegProWithPan"],
    firmwareVersion: "3.60",
    basedOn: '4x10" Ampeg PR-410HLF'
}, {
    id: ["HD2_CabMicIr_SoupProEllipse", "HD2_CabMicIr_SoupProEllipseWithPan"],
    firmwareVersion: "3.70",
    basedOn: '1x6x9" Supro S6616'
}, {
    id: ["HD2_CabMicIr_1x8SmallTweed", "HD2_CabMicIr_1x8SmallTweedWithPan"],
    firmwareVersion: "3.70",
    basedOn: '1x8" Fender Champ'
}, {
    id: ["HD2_CabMicIr_1x12Fullerton", "HD2_CabMicIr_1x12FullertonWithPan"],
    firmwareVersion: "3.70",
    basedOn: '1x12" Fender 5C3 Tweed Deluxe'
}, {
    id: ["HD2_CabMicIr_1x12CaliIV", "HD2_CabMicIr_1x12CaliIVWithPan"],
    firmwareVersion: "3.70",
    basedOn: '1x12" Mesa Boogie Mk IV Combo'
}, {
    id: ["HD2_CabMicIr_2x12Interstate", "HD2_CabMicIr_2x12InterstateWithPan"],
    firmwareVersion: "3.70",
    basedOn: '2x12" Dr Z Z Best V30'
}, {
    id: ["HD2_CabMicIr_4x12Greenback30", "HD2_CabMicIr_4x12Greenback30WithPan"],
    firmwareVersion: "3.70",
    basedOn: '4x12" Marshall Basketweave G12H-30'
}, {
    id: ["HD2_CabMicIr_4x12WhoWatt100", "HD2_CabMicIr_4x12WhoWatt100WithPan"],
    firmwareVersion: "3.70",
    basedOn: '4x12" Hiwatt AP Fane'
}, {
    id: ["HD2_CabMicIr_2x15USDripman", "HD2_CabMicIr_2x15USDripmanWithPan"],
    firmwareVersion: "3.70",
    basedOn: '2x15" Fender Bassman JBL D130'
}, {
    id: ["HD2_CabMicIr_6x10CaliPower", "HD2_CabMicIr_6x10CaliPowerWithPan"],
    firmwareVersion: "3.70",
    basedOn: '6x10" MESA/Boogie Power House'
}, {
    id: ["HD2_CabMicIr_4x10USSuper", "HD2_CabMicIr_4x10USSuperWithPan"],
    firmwareVersion: "3.80",
    basedOn: "Fender Super Reverb"
}, {
    id: ["HD2_CabMicIr_4x12CartogGuv", "HD2_CabMicIr_4x12CartogGuvWithPan"],
    firmwareVersion: "3.80",
    basedOn: "Ben Adrian's Cartographer cabinet (Modified Lee Jackson 4x12 with Eminence Governor speakers)"
}, {
    id: ["HD2_CabMicIr_4x12CartogC90", "HD2_CabMicIr_4x12CartogC90WithPan"],
    firmwareVersion: "3.80",
    basedOn: "Ben Adrian's Cartographer cabinet (Modified Lee Jackson 4x12 with Mesa C90 speakers)"
}, {
    id: ["HD2_CabMicIr_4x12SoloLeadEM", "HD2_CabMicIr_4x12SoloLeadEMWithPan"],
    firmwareVersion: "3.80",
    basedOn: "Soldano SLO 4x12 cabinet"
}]
const Qy = [{
    id: "HD2_DistMinotaur",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Klon® Centaur",
    buyUrl: "https://amzn.to/37oAaiz",
    manualUrl: "https://jasonshimmy.com/music/effects/klon/centaur",
    notableUsers: `<ul><li><a href="https://en.wikipedia.org/wiki/Jeff_Beck">Jeff Beck</a></li><li><a href="https://en.wikipedia.org/wiki/Mark_Tremonti">Mark Tremonti</a></li><li><a href="https://en.wikipedia.org/wiki/Aaron_Dessner">Aaron Dessner</a></li><li><a href="https://en.wikipedia.org/wiki/Lzzy_Hale">Lzzy Hale</a></li><li><a href="https://en.wikipedia.org/wiki/Andy_Summers">Andy Summers</a></li><li><a href="https://en.wikipedia.org/wiki/Keith_Urban">Keith Urban</a></li><li><a href="https://en.wikipedia.org/wiki/John_Mayer">John Mayer</a></li><li><a href="https://en.wikipedia.org/wiki/Black_Francis">Black Francis</a></li><li><a href="https://en.wikipedia.org/wiki/Peter_Frampton">Peter Frampton</a></li><li><a href="https://en.wikipedia.org/wiki/Warren_Haynes">Warren Haynes</a></li><li><a href="https://en.wikipedia.org/wiki/Mike_McCready">Mike McCready</a></li><li><a href="https://en.wikipedia.org/wiki/Stone_Gossard">Stone Gossard</a></li><li><a href="https://en.wikipedia.org/wiki/Nels_Cline">Nels Cline</a></li><li><a href="https://en.wikipedia.org/wiki/Lee_Ranaldo">Lee Ranaldo</a></li><li><a href="https://en.wikipedia.org/wiki/James_Hetfield">James Hetfield</a></li><li><a href="https://en.wikipedia.org/wiki/Britt_Daniel">Britt Daniel</a></li><li><a href="https://en.wikipedia.org/wiki/Joe_Bonamassa">Joe Bonamassa</a></li><li><a href="https://en.wikipedia.org/wiki/Joe_Perry_(musician)">Joe Perry</a></li><li><a href="https://en.wikipedia.org/wiki/Trey_Anastasio">Trey Anastasio</a></li><li><a href="https://en.wikipedia.org/wiki/Philip_Sayce">Philip Sayce</a></li><li><a href="https://en.wikipedia.org/wiki/Nick_Valensi">Nick Valensi</a></li><li><a href="https://en.wikipedia.org/wiki/Jason_Isbell">Jason Isbell</a></li><li><a href="https://en.wikipedia.org/wiki/Mike_Ness">Mike Ness</a></li><li><a href="https://en.wikipedia.org/wiki/Josh_Klinghoffer">Josh Klinghoffer</a></li><li><a href="https://en.wikipedia.org/wiki/Dave_Welsh">Dave Welsh</a></li><li><a href="https://en.wikipedia.org/wiki/Dean_Wareham">Dean Wareham</a></li><li><a href="https://en.wikipedia.org/wiki/Yannis_Philippakis">Yannis Philippakis</a></li><li><a href="https://en.wikipedia.org/wiki/Wooden_Shjips">Wooden Shjips</a> (Erik 'Ripley' Johnson)</li><li><a href="https://en.wikipedia.org/wiki/Noel_Gallagher">Noel Gallagher</a></li></ul>`
}, {
    id: "HD2_DistTeemah",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Paul Cochrane Timmy® Overdrive",
    buyUrl: "https://amzn.to/3k9a4W7",
    manualUrl: "https://jasonshimmy.com/music/effects/paul-cochrane/timmy-overdrive",
    synopsis: "<p>The Timmy Overdrive provides a versatile range of overdrive tones that enhance the natural sound of your guitar and amp setup. With three different clipping options and ingeniously configured Bass and Treble controls, this pedal offers players a ton of options to make the most of their playing and recording experience.</p><ul><li><strong>Gain</strong> adjusts overdrive intensity</li><li><strong>Bass Cut</strong> cuts the low end frequencies from pre-overdrive signal</li><li><strong>Treble Cut</strong> cuts high end frequencies from post-overdrive signal</li><li><strong>Clipping</strong> switch sets the clipping mode</li><li><strong>Level</strong> adjusts overall volume of effect</li></ul><p><strong>Clipping Modes</strong></p><ul><li><strong>Up:</strong> Asymmetrical clipping with moderate saturation and slight compression for a wide, dynamic range of sounds.</li><li><strong>Center:</strong> Symmetrical clipping with light saturation, high headroom, and high definition for a big sound.</li><li><strong>Down:</strong> Symmetrical clipping with heavy saturation and low headroom.</li></ul>"
}, {
    id: "HD2_DistCompulsiveDrive",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Fulltone® OCD",
    buyUrl: "https://amzn.to/3dpqBnB",
    manualUrl: "https://jasonshimmy.com/music/effects/fulltone/ocd"
}, {
    id: "HD2_DistValveDriver",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Chandler Tube Driver",
    buyUrl: "https://amzn.to/3jZJD5g",
    manualUrl: "https://jasonshimmy.com/music/effects/chandler/tube-driver"
}, {
    id: "HD2_DistTopSecretOD",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "DOD® OD-250",
    manualUrl: "https://jasonshimmy.com/music/effects/dod/od-250"
}, {
    id: "HD2_DistScream808",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Ibanez® TS808 Tube Screamer®",
    buyUrl: "https://amzn.to/3k1WNi4",
    manualUrl: "https://jasonshimmy.com/music/effects/ibanez/ts808-tube-screamer"
}, {
    id: "HD2_DistHedgehogD9",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "MAXON® SD9 Sonic Distortion",
    buyUrl: "https://amzn.to/3uenyVl",
    manualUrl: "https://jasonshimmy.com/music/effects/maxon/sd9-sonic-distortion"
}, {
    id: "HD2_DistVerminDist",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Pro Co RAT",
    buyUrl: "https://amzn.to/3k3NsX5",
    manualUrl: "https://jasonshimmy.com/music/effects/pro-co/rat",
    synopsis: "<p>Turns out our Vermin Dist model was broken. Sorry! This is still a cool model with it's use cases but for a closer representation of a physical Pro Co Rat, check out the Ratatouille Dist.</p><ul><li><strong>Gain</strong>: Sets the amount of distortion</li><li><strong>Filter</strong>: Sets the amount of high cut (low pass) filter applied to the distortion; basically letting more treble through (lower values) or filtering it out (higher values)</li><li><strong>Level</strong>: Sets the overall level of the block</li></ul>"
}, {
    id: "HD2_DistKWB",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Benadrian Kowloon Walled Bunny Distortion",
    manualUrl: "https://jasonshimmy.com/music/effects/kwb/distortion"
}, {
    id: "HD2_DistArbitratorFuzz",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Arbiter® FuzzFace®",
    buyUrl: "https://amzn.to/2Zxd3OJ",
    manualUrl: "https://jasonshimmy.com/music/effects/arbiter/fuzz-face"
}, {
    id: "HD2_DistTriangleFuzz",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Electro-Harmonix® Big Muff π®",
    buyUrl: "https://amzn.to/2ORVbvS",
    manualUrl: "https://jasonshimmy.com/music/effects/electro-harmonix/big-muff-pi"
}, {
    id: "HD2_DistIndustrialFuzz",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Z.Vex Fuzz Factory",
    buyUrl: "https://amzn.to/37u3Drx",
    manualUrl: "https://jasonshimmy.com/music/effects/z-vex/fuzz-factory"
}, {
    id: "HD2_DistTycoctaviaFuzz",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Tycobrahe® Octavia",
    manualUrl: "https://jasonshimmy.com/music/effects/tycobrahe/octavia"
}, {
    id: "HD2_DistWringerFuzz",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Garbage's modded BOSS® FZ-2",
    buyUrl: "https://amzn.to/3dpZ5WY",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/fz-2-hyper-fuzz"
}, {
    id: "HD2_DistMegaphone",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Megaphone",
    buyUrl: "https://amzn.to/2OMRoQl",
    manualUrl: "https://www.tc-helicon.com/product.html?modelCode=P0DE4"
}, {
    id: "HD2_DistBitcrusher",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_DistStuporOD",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "BOSS® SD-1 Overdrive",
    buyUrl: "https://amzn.to/3u9Ht7D",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/sd-1-super-overdrive"
}, {
    id: "HD2_DistObsidian7000",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Darkglass Electronics® Microtubes B7K Ultra bass preamp/overdrive/EQ",
    buyUrl: "https://amzn.to/2OMRS97",
    manualUrl: "https://jasonshimmy.com/music/effects/darkglass-electronics/microtubes-b7k-ultra"
}, {
    id: "HD2_DistClawthornDrive",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Wounded Paw Battering Ram bass overdrive",
    manualUrl: "https://jasonshimmy.com/music/effects/wounded-paw/battering-ram"
}, {
    id: "HD2_DistKinkyBoost",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Xotic® EP Booster",
    buyUrl: "https://amzn.to/2OQuWGa",
    manualUrl: "https://jasonshimmy.com/music/effects/xotic/ep-booster"
}, {
    id: "HD2_DistThrifterFuzz",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_DistDerangedMaster",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Dallas Rangemaster Treble Booster",
    buyUrl: "https://amzn.to/2NiTcQM",
    manualUrl: "https://jasonshimmy.com/music/effects/dallas/rangemaster-treble-booster",
    synopsis: "WARNING! Like the real thing, this model can take your head off! Works best before a distorted amp."
}, {
    id: "HD2_DistDeezOneVintage",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "BOSS© DS-1 distortion pedal (classic Made-in-Japan version)",
    buyUrl: "https://amzn.to/37u4IQ7",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/ds-1-distortion"
}, {
    id: "HD2_DistDeezOneMod",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "BOSS© DS-1 distortion pedal (Keeley mod version)",
    buyUrl: "https://amzn.to/37u4IQ7",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/ds-1-distortion"
}, {
    id: "HD2_DistDhyanaDrive",
    firmwareVersion: "2.80",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Hermida Zendrive",
    manualUrl: "https://jasonshimmy.com/music/effects/hermida/zendrive"
}, {
    id: "HD2_DistHeirApparent",
    firmwareVersion: "2.80",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Analogman Prince of Tone (basically half a King of Tone)",
    manualUrl: "https://jasonshimmy.com/music/effects/analogman/prince-of-tone"
}, {
    id: "HD2_DistToneSovereign",
    firmwareVersion: "2.80",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Analogman King of Tone V4 (basically two Prince of Tones in one)",
    manualUrl: "https://jasonshimmy.com/music/effects/analogman/king-of-tone"
}, {
    id: "HD2_DistZeroAmpBassDI",
    firmwareVersion: "2.80",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Tech 21 SansAmp Bass Driver DI V1",
    buyUrl: "https://amzn.to/3durKKu",
    manualUrl: "https://jasonshimmy.com/music/effects/tech-21/sansamp-bass-driver"
}, {
    id: "HD2_DistAmpegScrambler",
    firmwareVersion: "2.80",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Ampeg Scrambler Bass Overdrive",
    buyUrl: "https://amzn.to/3dxeOUp",
    manualUrl: "https://jasonshimmy.com/music/effects/ampeg/scrambler"
}, {
    id: "HD2_DistAlpacaRouge",
    basedOn: "Way Huge® Red Llama (modded)",
    firmwareVersion: "2.90",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/way-huge/red-llama",
    synopsis: '<p>This model is used in front of a Derailed Ingrid for the guitar tracks in this video. For complete details, read the videos description on YouTube.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EmFP79KaZ9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}, {
    id: "HD2_DistLegendaryDrive",
    basedOn: "Carvin VLD1 Legacy Drive (high gain channel)",
    firmwareVersion: "2.90",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/carvin/vld1-legacy-drive"
}, {
    id: "HD2_DistXenomorphFuzz",
    basedOn: "Subdecay Harmonic Antagonizer",
    firmwareVersion: "2.90",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/subdecay/harmonic-antagonizer"
}, {
    id: "HD2_DistHorizonDrive",
    basedOn: "Horizon Devices Precision Drive",
    firmwareVersion: "3.00",
    manualUrl: "https://jasonshimmy.com/music/effects/horizon-devices/precision-drive",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    synopsis: `Includes an extra Gate Range parameter that, when set to "Extended," drops the gate's threshold down to -90dB`
}, {
    id: "HD2_DistSwedishChainsaw",
    basedOn: "BOSS® HM-2 Heavy Metal Distortion (Made in Japan black label)",
    firmwareVersion: "3.00",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/hm-2-heavy-metal-distortion",
    category: "Distortion",
    subcategory: "Mono, Stereo"
}, {
    id: "HD2_DistPocketFuzz",
    basedOn: "Inspired by the Jordan Boss Tone fuzz",
    firmwareVersion: "3.00",
    manualUrl: "https://jasonshimmy.com/music/effects/jordan/boss-tone",
    category: "Distortion",
    subcategory: "Mono, Stereo"
}, {
    id: "HD2_DistRamsHead",
    basedOn: "1973 Electro-Harmonix® Ram's Head Big Muff Pi",
    buyUrl: "https://amzn.to/3bnMRvz",
    firmwareVersion: "3.00",
    manualUrl: "https://jasonshimmy.com/music/effects/electro-harmonix/big-muff-pi",
    category: "Distortion",
    subcategory: "Mono, Stereo"
}, {
    id: "HD2_DistBallisticFuzz",
    basedOn: "Euthymia ICBM fuzz",
    firmwareVersion: "3.00",
    manualUrl: "https://jasonshimmy.com/music/effects/euthymia/icbm",
    category: "Distortion",
    subcategory: "Mono, Stereo"
}, {
    id: "HD2_DistRatatouilleDist",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "1984 Pro Co RAT",
    firmwareVersion: "3.10",
    buyUrl: "https://amzn.to/3k3NsX5",
    manualUrl: "https://jasonshimmy.com/music/effects/pro-co/rat",
    synopsis: `<p>Turns out our Vermin Dist model was broken. Sorry! We were going to replace it completely but a bunch of people had presets with the old version. On top of that, we found out our RAT's LM308 chip had crapped out since we modeled it last so we decided to get it into perfect working order and start from scratch</p><ul><li><strong>Gain</strong>: Sets the amount of distortion</li><li><strong>Filter</strong>: Sets the amount of high cut (low pass) filter applied to the distortion; basically letting more treble through (lower values) or filtering it out (higher values)</li><li><strong>Level</strong>: Sets the overall level of the block</li></ul><p><strong>Blues Type Tone</strong></p><p>This setting produces a "bluesy" soft-clipped distortion sound much like that of a small tube amp. "Fine tune" the control settings to suit your instrument's own tone and character.</p><ul><li><strong>Gain</strong>: 3.5-4</li><li><strong>Filter</strong>: 0</li><li><strong>Level</strong>: 6.5-7</li></ul><p><strong>Lead Type Tone</strong></p><p>A very "biting" lead sound with lots of harmonic emphasis; use the treble pickup on your guitar and vary the DISTORTION control a bit to "home in" on the overtones for a subtle fixed-"wah" effect.</p><ul><li><strong>Gain</strong>: 6.5-7</li><li><strong>Filter</strong>: 8-8.5</li><li><strong>Level</strong>: 5-5.5</li></ul><p><strong>Heavy Type Tone</strong></p><p>A bone-crunching heavy-metal sound yielding incredible power and smooth, effortless sustain.</p><ul><li><strong>Gain</strong>: 10</li><li><strong>Filter</strong>: 5-5.5</li><li><strong>Level</strong>: 3.5-4</li></ul>`,
    notableUsers: `<ul><li>Kurt Cobain</li><li>Krist Novoselic</li><li>Jeff Beck</li><li>Jerry Cantrell</li><li>Dave Grohl</li><li>David Gilmour</li><li>Thom Yorke</li><li>Rivers Cuomo</li><li>James Hetfield</li><li>Many, many more…</li></ul><p>The Foo Fighters make extensive use of the Pro Co Rat alongside a Memory Man into a Vox AC-30 on their third album, There's Nothing Left to Lose. See the following excerpts:</p><p><strong>What was the fundamental guitar-sound recipe for the new album?</strong></p><p>We focused on not using too many distortion pedals, and went for a cleaner, fatter, more natural overdrive. We used a Vox AC30 for pretty much everything on the record, tweaking the sound so that it broke up nicely when played loud.</p><p>Sometimes we'd double a track using an old Pro Co Rat, and then hard-pan the parts so that a super-distorted guitar was in the left channel and a grindy guitar was in the right. Then we'd sprinkle in lots of clean guitar overdubs.</p><p>Check out the rest of this <a href="https://www.fooarchive.com/features/guitarplayer99.htm">fantastic interview</a> with Dave Grohl from a 1999 issue of Guitar Player Magazine for more details.</p>`
}, {
    id: "Line6BronzeMaster",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "Maestro® Bass Brassmaster",
    manualUrl: "https://jasonshimmy.com/music/effects/maestro/bass-brassmaster",
    firmwareVersion: "3.15",
    synopsis: "<p>Originally designed for bass, but equally cool on guitar, the Maestro® Bass Brassmaster is considered by many to be the Holy Grail of bass distortion units, an ultra-rare bird designed in the early 70's for Maestro® by synth genius Tom Oberheim.</p>"
}, {
    id: "KillerZ",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    basedOn: "BOSS® Metal Zone MT-2",
    firmwareVersion: "3.15",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/mt-2-metal-zone",
    buyUrl: "https://amzn.to/32roQ5G",
    synopsis: "<p>Equipped with a dual gain circuit, the MT-2 provides amazing sustain plus heavy mids and lows similar to a stack of overdriven amps. We've simplified the EQ controls a bit to make the Killer Z model, but you'll still find the sought after flavor of the MT-2 style sound.</p>"
}, {
    id: "HD2_DM4TubeDrive",
    basedOn: "Chandler Tube Driver®",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/chandler/tube-driver",
    synopsis: "Based on the Chandler Tube Driver®, delivering the sweet singing sustain craved by guitarists worldwide."
}, {
    id: "HD2_DM4Screamer",
    basedOn: "Ibanez® Tube Screamer®",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/ibanez/ts808-tube-screamer",
    synopsis: "Based on an Ibanez® Tube Screamer®. In many blues circles, you're not allowed to solo without one of these medium-gain pedals!"
}, {
    id: "HD2_DM4Overdrive",
    basedOn: "DOD® Overdrive/Preamp 250",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/dod/od-250",
    synopsis: "Based on the DOD® Overdrive/Preamp 250 designed to slam the input of a tube guitar amp forcing the amp to distort violently."
}, {
    id: "HD2_DM4ClassicDistortion",
    basedOn: "ProCo Rat",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/pro-co/rat",
    synopsis: "Based on the ProCo Rat, an angry and aggressive distortion box that put teeth into a new breed of metal in the late 70's."
}, {
    id: "HD2_DM4HeavyDistortion",
    basedOn: "Boss® Metal Zone",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/mt-2-metal-zone",
    synopsis: "Based on Boss® Metal Zone, the industry standard distortion pedal for metal players since 1989."
}, {
    id: "HD2_DM4ColorDrive",
    basedOn: "Colorsound® Overdriver",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/colorsound/overdriver",
    synopsis: "Based on the Colorsound® Overdriver. Our model will transport you instantly back to that breeding ground of British guitar heroes."
}, {
    id: "HD2_DM4BuzzSaw",
    basedOn: "Maestro® Fuzz Tone",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/maestro/fuzz-tone",
    synopsis: `Based on the Maestro® Fuzz Tone. Take a deep breath and repeat: "I can't get no (duh, duh, duh) Satisfaction."`
}, {
    id: "HD2_DM4FacialFuzz",
    basedOn: "Arbiter Fuzz Face",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/arbiter/fuzz-face",
    synopsis: "Based on the Arbiter Fuzz Face, best known for its famous association with guitar legends Jimi Hendrix & Eric Johnson."
}, {
    id: "HD2_DM4JumboFuzz",
    basedOn: "Vox® Tone Bender",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/vox/tone-bender",
    synopsis: 'Based on the Vox® Tone Bender. It can be heard all over the first two Led Zeppelin records, and is especially apparent on "Communication Breakdown."'
}, {
    id: "HD2_DM4FuzzPi",
    basedOn: "Electro- Harmonix® Big Muff Pi®",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/electro-harmonix/big-muff-pi",
    synopsis: "Based on the Electro-Harmonix® Big Muff Pi®, this is an American twist on the distortion/fuzz pedal, known more for its wicked sustain than its buzz."
}, {
    id: "HD2_DM4JetFuzz",
    basedOn: "Roland® Jet Phaser",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/roland/jet-phaser",
    synopsis: "Based on the Roland® Jet Phaser. It's a fuzz. It's a phaser. Yeah baby! Time to grab your 8-tracks of Uli Roth era Scorpions."
}, {
    id: "HD2_DM4Line6Drive",
    basedOn: "Line 6 Original",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    synopsis: "Inspired by the Colorsound® Tone Bender. If we could go back to the 60's and be a part of the fuzz revolution... this is what we'd design."
}, {
    id: "HD2_DM4Line6Distortion",
    basedOn: "Line 6 Original",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    synopsis: "Completely over the top. Sure, it's massive. Yes, it's over the top. Okay, it's a lotta crazy!!!"
}, {
    id: "HD2_DM4SubOctFuzz",
    basedOn: "Line 6 Original",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    synopsis: "Inspired by the PAiA Roctave Divider, this fuzz with an octave below is just what you need to give those Moog players a fit! Try it on bass guitar—this is the Octaver of Doom!"
}, {
    id: "HD2_DM4OctaveFuzz",
    basedOn: "Tycobrahe® Octavia",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/tycobrahe/octavia",
    synopsis: "Based on the Tycobrahe® Octavia, the classic fuzz+octave effect. One pioneering user of this type of effect was Jimi Hendrix."
}, {
    id: "HD2_DistPillars",
    basedOn: "Earthquaker Devices Plumes",
    firmwareVersion: "3.50",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    buyUrl: "https://amzn.to/3CxrPYX",
    manualUrl: "https://jasonshimmy.com/music/effects/earthquaker-devices/plumes",
    synopsis: "<p>Plumes® is a unique, all-analog approach to a classic tube-like overdrive circuit offering 3 different clipping voices, loads of headroom and almost three-dimensional clarity that will push your amp over the edge. The reimagined tone control is finely tuned to sculpt low end, clear top end, and focus midrange with blooming sustain.</p>"
}, {
    id: "HD2_DistVitalDist",
    basedOn: "Earthquaker Devices Life (distortion side)",
    firmwareVersion: "3.50",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/earthquaker-devices/life",
    synopsis: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/zx_NPRrgfLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}, {
    id: "HD2_DistVitalBoost",
    basedOn: "Earthquaker Devices Life (boost side)",
    firmwareVersion: "3.50",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/earthquaker-devices/life",
    synopsis: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/zx_NPRrgfLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}, {
    id: "HD2_DistDarkDoveFuzz",
    basedOn: "Electro-Harmonix Russian Big Muff",
    firmwareVersion: "3.60",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/electro-harmonix/big-muff-pi",
    buyUrl: "https://amzn.to/3MynhrU",
    synopsis: "<p>The cult classic Green Russian Big Muff first shook the ground in the mid-1990s. Since then it has been heralded by guitarists and bassists for its devastating low-end and unique sludge and sizzle.</p>"
}, {
    id: "HD2_DistPrizeDrive",
    basedOn: "Nobels ODR-1",
    firmwareVersion: "3.70",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/nobels/odr-1",
    buyUrl: "https://amzn.to/48EoXZc",
    synopsis: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WjCVnFLwP9k?si=Ohu85G76XpNsObAy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
}, {
    id: "HD2_DistRegalBassDI",
    basedOn: "Nobel Bass Preamp DI",
    firmwareVersion: "3.70",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/noble/bass-preamp-di"
}, {
    id: "VIC_ReverbDynBloom",
    basedOn: "Line 6 Original",
    firmwareVersion: "3.70",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    synopsis: `<ul><li>Decay—Sets the decay of the reverb (0.1 sec ~ 45.0 sec, or Infinity).</li><li>Damping—Determines the frequency above which the reverb will be absorbed. For example, if your hall is full of people wearing fake ocelot jumpsuits, more high frequencies would be absorbed than if the room were empty.</li><li>Mot Rate—Motion Rate, or how fast the echoes' intensity changes, due to changes in plate tension or temperature.</li><li>Rise Time—Sets how long it takes for the reverb to bloom. Choose Short, Medium (default), or Long.</li><li>Mix—Controls the wet/dry mix of the reverb. When set to 0%, no reverb is heard; when set to 100%, no dry signal is heard.</li><li>Low Freq—Sets the frequency below which the Low Gain parameter is applied.</li><li>Low Gain—Sets the reverb time for frequencies below the Low Freq value. Values below 0.0dB mean the bass frequencies decay faster than the treble frequencies; values above 0.0dB mean the bass frequencies decay slower than the treble frequencies.</li><li>Low Cut—Applies a low cut (or high pass) filter to the reverb, letting you remove the effected signal below a certain frequency.</li><li>High Cut—Applies a high cut (or low pass) filter to the reverb, letting you remove the effected signal above a certain frequency.</li><li>Ducking—Controls how much of the reverb is dropped in volume (or "ducked") while the signal is active. Higher values drop the reverb level more while you play.</li><li>Level—Sets the overall level of the block.</li><li>Trails—When set to "Off," reverb decay is instantly muted when the block is bypassed. When set to "On," the reverb continues to decay naturally when the block is bypassed or a different snapshot is selected.</li></ul>`
}, {
    id: "HD2_CompressorDeluxeComp",
    category: "Dynamics",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_CompressorRedSqueeze",
    category: "Dynamics",
    subcategory: "Mono, Stereo",
    basedOn: "MXR® Dyna Comp",
    buyUrl: "https://amzn.to/3uc5Z8h",
    manualUrl: "https://jasonshimmy.com/music/effects/mxr/dyna-comp"
}, {
    id: "HD2_CompressorLAStudioComp",
    category: "Dynamics",
    subcategory: "Mono, Stereo",
    basedOn: "Teletronix® LA-2A®",
    buyUrl: "https://amzn.to/3bhJy98",
    manualUrl: "https://jasonshimmy.com/music/effects/teletronix/la-2a"
}, {
    id: "HD2_GateNoiseGate",
    category: "Dynamics",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Use this to eliminate the hiss from noisy pickups or the white noise from extremely high gain distortions by placing the noise gate further in your signal path chain."
}, {
    id: "HD2_GateHardGate",
    category: "Dynamics",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "With more controls than the Noise Gate, you can further use this one for intentional effects, such as stuttering and lopped- off power chords."
}, {
    id: "HD2_Compressor3BandComp",
    category: "Dynamics",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original multiband compressor"
}, {
    id: "HD2_CompressorAutoSwell",
    category: "Dynamics",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_CompressorKinkyComp",
    category: "Dynamics",
    subcategory: "Mono, Stereo",
    basedOn: "Xotic® SP Compressor",
    buyUrl: "https://amzn.to/3azMAGG",
    manualUrl: "https://jasonshimmy.com/music/effects/xotic/sp-compressor"
}, {
    id: "HD2_CompressorRochesterComp",
    basedOn: "Ashly® CLX-52 and created in conjunction with Billy Sheehan",
    firmwareVersion: "2.90",
    category: "Dynamics",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/ashly/clx-52"
}, {
    id: "HD2_GateHorizonGate",
    basedOn: "Horizon Devices Precision Drive's gate circuit",
    firmwareVersion: "3.00",
    manualUrl: "https://jasonshimmy.com/music/effects/horizon-devices/precision-drive",
    category: "Dynamics",
    subcategory: "Mono, Stereo",
    synopsis: `Includes an extra Gate Range parameter that, when set to "Extended," drops the gate's threshold down to -90dB. Works best before an amp.`
}, {
    id: "HD2_CompressorOptoComp",
    basedOn: "Ampeg Opto Comp",
    firmwareVersion: "3.15",
    buyUrl: "https://amzn.to/3eeNKII",
    manualUrl: "https://jasonshimmy.com/music/effects/ampeg/opto-comp",
    category: "Dynamics",
    subcategory: "Mono, Stereo",
    synopsis: "<ul><li>Compress—This is actually a ratio control, which controls the amount of compression. At 0.0, the ratio is 1:1; at 5.0, the ratio is at 3:1, and at 10.0, the ratio is at 10:1</li><li>Release—Controls how long it takes for the compressor to stop&nbsp;reducing gain. At 0.0, the&nbsp;release is 75 ms; at 10.0, the release is around&nbsp;600 ms</li><li>Mix—Controls the wet/dry mix of the compressor. When set to 0%, no compressed signal is heard; when set to 100%, no dry signal is heard</li><li>Level—Sets the overall level of the block</li></ul>"
}, {
    id: "HD2_DM4BoostComp",
    category: "Dynamics",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: 'Inspired by a MXR® Micro Amp. Our model delivers the same "goose the input of the amp" experience and serves up a little secret sauce on the side.'
}, {
    id: "HD2_DM4RedComp",
    category: "Dynamics",
    subcategory: "Mono, Stereo",
    basedOn: "MXR® Dyna Comp",
    manualUrl: "https://jasonshimmy.com/music/effects/mxr/dyna-comp",
    synopsis: "Based on the MXR® Dyna Comp, probably the most widely used stompbox compressor. Slide players such as Lowell George loved it."
}, {
    id: "HD2_DM4BlueComp",
    category: "Dynamics",
    subcategory: "Mono, Stereo",
    basedOn: "Boss® CS-1",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/cs-1-compression-sustainer",
    synopsis: "Based on the Boss® CS-1 Compression Sustainer with the treble switch off."
}, {
    id: "HD2_DM4BlueCompTreb",
    category: "Dynamics",
    subcategory: "Mono, Stereo",
    basedOn: "Boss® CS-1",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/cs-1-compression-sustainer",
    synopsis: "Based on the Boss® CS-1 Compression Sustainer with the treble switch on."
}, {
    id: "HD2_DM4VettaComp",
    category: "Dynamics",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Taken from Line 6's guitar amplifier - Vetta II. With a fixed ratio of 2.35:1, adjustable threshold and up to 12dB of gain available at the Level knob."
}, {
    id: "HD2_DM4VettaJuice",
    category: "Dynamics",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "A Line 6 original also created for our Vetta II guitar amplifier, the 'Juice' in Vetta Juice comes from the 30dB of available gain in the Level knob."
}, {
    id: "HD2_DM4TubeComp",
    category: "Dynamics",
    subcategory: "Mono, Stereo",
    basedOn: "Teletronix® LA-2A®",
    manualUrl: "https://jasonshimmy.com/music/effects/teletronix/la-2a",
    synopsis: "Based on the Teletronix® LA-2A® studio compressor. Considered one of the finest compressors in many circles."
}, {
    id: "VIC_FeedbackSim",
    basedOn: "Line 6 Original",
    firmwareVersion: "3.70",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    synopsis: `<p>Oh man, this one is fun with a capital Ffffff but you'll want to read up on how to get the best results. Works best as one of the first blocks in your signal flow. <strong>NOTE: Feedbacker loads bypassed by default.</strong></p><ul><li>Fdbk Gain—Controls the amount of feedback. At higher settings, can easily overwhelm your guitar signal; at lower settings, the feedback can better "sit" between chords. <strong>WARNING! Be careful, as this effect can quickly go off the rails, just like real feedback.</strong> Consider assigning it to a momentary stomp so feedback only appears while you hold the switch.</li><li>Fdbk Type—Determines the type of the feedback generated. <strong>TIP: Try assigning different Feedback Type values to snapshots.</strong><ul><li>-Octave—Feedback appears one octave below the "reference frequency," which is basically the note Feedbacker chooses to base its feedback generation on. Depending on the chord, Feedbacker may choose different reference frequencies.</li><li>Unison—Feedback appears at the reference frequency.</li><li>+Octave—Feedback appears one octave above the the reference frequency.</li><li>Oct +5th—Feedback appears one octave plus a 5th above the the reference frequency.</li><li>+2 Octaves—Feedback appears two octaves above the the reference frequency.</li><li>2 Oct+3rd—Feedback appears two octaves plus a 3rd above the reference note frequency.</li><li>2 Oct+5th—Feedback appears two octaves plus a 5th above the reference note frequency.</li><li>2 Oct+7th—Feedback appears two octaves plus a 7th above the reference note frequency.</li><li>High to Low—Feedback typically begins on the highest harmonic below 1200 Hz and descends to lower harmonics as the signal decays.</li><li>Mid to Low—Feedback typically starts on the highest harmonic below 500 Hz and drops down to lower harmonics as the signal decays.</li><li>Rndm Onset—New harmonics are selected randomly every time a new onset (note or chord's attack) is detected. In this case, repeating the same chord could still generate different harmonics.</li><li>Rndm Trigger—New harmonics are selected randomly every time the Retrigger parameter is set to "Trigger." See the Retrigger parameter below.</li></ul></li><li>Attack—Controls how quickly feedback appears.</li><li>Release—Controls how quickly each harmonic dies out or transitions to a different one. At higher values, you may hear more than one harmonic as they transition.</li><li>Dry Kill—Determines what happens to the dry (unaffected) signal:<ul><li>Off—The dry signal is controlled by the Dry Level parameter but is otherwise unaffected when the Feedbacker block is turned on</li><li>On—The dry signal is muted when the Feedback block is turned on. <strong>TIP: With Dry Kill on and Fdbk Type set to "Unison," playing slower, single notes can result in sounds similar to using an E-bow.</strong></li><li>Always—The dry signal is completely muted from the entire path, regardless of whether the Feedback block is on or off. <strong>TIP: Use this setting only when Feedbacker is on a parallel path.</strong></li></ul></li><li>Dry Level—Sets the amount of dry signal through the Feedbacker block. <strong>TIP: Assign this parameter to an expression pedal for blending in the dry signal behind the feedback.</strong></li><li>Reference—Determines which note within a chord is referenced by the feedback. "Lowest" prioritizes a chord's lowest-pitched note as the feedback reference, which often represents the fundamental frequency of the chord. "Loudest" prioritizes the loudest note in the chord as the feedback reference, which may not be the lowest note.</li><li>Silence Thr—Sets the level threshold above which feedback is generated. Below this level, no feedback will be generated. Onset Thr—When Feedback Type is set to Rndm Offset, sets the threshold of onsets (plucks) that cause changes to the feedback note. Lower values increase sensitivity to plucking and strumming, so changes to the feedback note take place more often. Higher values reduce sensitivity to plucking and strumming, so changes to the feedback note take place less often.</li><li>Offset Thr—When the level drops below this level, feedback fades out.</li><li>Retrigger—Okay, Retrigger isn't a parameter per sé; it's meant for you to assign it to an unused momentary stomp switch. (Press and hold the Retrigger knob, press Learn, press the desired stomp switch, and then set Type to "Momentary.") Every time you press the switch (and the parameter changes from "---" to "Trigger"), the feedback generated will change, depending on the type of mode:<ul><li>High to Low or Mid to Low modes—Pressing the Retrigger switch will cause the Feedbacker to descend to lower harmonics.</li><li>Rndm Trigger or Rndm Onset—Pressing the Retrigger switch will cause the Feedbacker to randomly choose a different harmonic.</li><li>All other modes—Pressing the Retrigger switch will cause feedback to regenerate at the mode's selected frequency.</li></ul></li><li>Trails—When on, feedback continues to ring out (for the duration of the Release parameter) after the block is bypassed. When off, feedback stops abruptly when the block is bypassed.</li></ul>`
}, {
    id: "HD2_EQSimple3Band",
    category: "EQ",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_EQLowCutHighCut",
    category: "EQ",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_EQParametric",
    category: "EQ",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "High shelf, low shelf, and a fully parametric band."
}, {
    id: "HD2_EQGraphic10Band",
    category: "EQ",
    subcategory: "Mono, Stereo",
    basedOn: "MXR® 10-Band Graphic EQ",
    buyUrl: "https://amzn.to/3u6kP05",
    manualUrl: "https://jasonshimmy.com/music/effects/mxr/10-band-graphic-eq"
}, {
    id: "HD2_CaliQ",
    category: "EQ",
    subcategory: "Mono, Stereo",
    basedOn: "MESA/Boogie® Mark IV Graphic EQ",
    manualUrl: "https://jasonshimmy.com/music/amps/mesa-boogie/mark-iv"
}, {
    id: "HD2_EQLowShelfHighShelf",
    firmwareVersion: "2.80",
    category: "EQ",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_EQSimpleTilt",
    firmwareVersion: "2.80",
    category: "EQ",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Tilt is a subtle 6dB EQ that boosts high frequencies while simultaneously attenuating low frequencies (or vice versa). Great for quickly making tones a bit brighter or darker. The Center Freq parameter sets the frequency around which the boost and cut pivot."
}, {
    id: "L6SPB_AcousGtrSim",
    basedOn: "BOSS® AC-2 Acoustic Simulator",
    buyUrl: "https://amzn.to/3bl5S1C",
    firmwareVersion: "3.00",
    category: "EQ",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/ac-2-acoustic-simulator",
    synopsis: "Includes an extra Shimmer parameter that imparts some motion to the harmonics, reminiscent of how a string's vibration tends to affect the other strings. Just like the original, works best with single-coil pickups. Can be used alone or in conjunction with an acoustic IR."
}, {
    id: "HD2_TremoloOpticalTrem",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    basedOn: "Fender® optical tremolo circuit",
    manualUrl: "https://www.clarkhuckaby.com/NewVibe/CloseLookVibe.html"
}, {
    id: "HD2_Tremolo60sBiasTrem",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    basedOn: "Vox® AC-15 Tremolo",
    manualUrl: "https://jasonshimmy.com/music/amps/vox/ac15"
}, {
    id: "HD2_TremoloTremolo",
    category: "Modulation",
    subcategory: "Mono",
    basedOn: "BOSS® PN-2",
    buyUrl: "https://amzn.to/3uaLzMQ",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/pn-2-tremolo-pan"
}, {
    id: "HD2_TremoloTremolo",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    basedOn: "BOSS® PN-2",
    buyUrl: "https://amzn.to/3uaLzMQ",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/pn-2-tremolo-pan"
}, {
    id: "HD2_TremoloHarmonic",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_PhaserScriptModPhase",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    basedOn: "MXR® Phase 90",
    buyUrl: "https://amzn.to/3bhluDa",
    manualUrl: "https://jasonshimmy.com/music/effects/mxr/phase-90"
}, {
    id: "HD2_PhaserUbiquitousVibe",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    basedOn: "Shin-ei Uni-Vibe®",
    buyUrl: "https://amzn.to/3dqF1E3",
    manualUrl: "https://jasonshimmy.com/music/effects/shin-ei/uni-vibe"
}, {
    id: "HD2_PhaserDeluxePhaser",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_FlangerGrayFlanger",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    basedOn: "MXR® 117 Flanger",
    buyUrl: "https://amzn.to/3k0bWR5",
    manualUrl: "https://jasonshimmy.com/music/effects/mxr/117-flanger"
}, {
    id: "HD2_FlangerHarmonicFlanger",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    basedOn: "A/DA Flanger",
    buyUrl: "https://amzn.to/37rRWBz",
    manualUrl: "https://jasonshimmy.com/music/effects/ada/flanger"
}, {
    id: "HD2_FlangerCourtesanFlange",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    basedOn: "Electro-Harmonix® Deluxe EM",
    manualUrl: "https://jasonshimmy.com/music/effects/electro-harmonix/deluxe-em"
}, {
    id: "HD2_FlangerDynamixFlanger",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_Chorus",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_Chorus70sChorus",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    basedOn: "BOSS® CE-1",
    buyUrl: "https://amzn.to/3dlnqgG",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/ce-1-chorus-ensemble"
}, {
    id: "HD2_ChorusTrinityChorus",
    category: "Modulation",
    subcategory: "Stereo",
    basedOn: "DyTronics Tri-Stereo Chorus",
    manualUrl: "https://jasonshimmy.com/music/effects/song-bird-dytronics/tri-stereo-chorus"
}, {
    id: "HD2_VibratoBubbleVibrato",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    basedOn: "BOSS® VB-2 Vibrato",
    buyUrl: "https://amzn.to/3ubutyr",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/vb-2-vibrato"
}, {
    id: "HD2_RotaryVibeRotary",
    category: "Modulation",
    subcategory: "Stereo",
    basedOn: "Fender® Vibratone",
    manualUrl: "https://jasonshimmy.com/music/effects/fender/vibratone"
}, {
    id: "HD2_Rotary122Rotary",
    category: "Modulation",
    subcategory: "Stereo",
    basedOn: "Leslie® 122",
    manualUrl: "https://jasonshimmy.com/music/effects/leslie/122"
}, {
    id: "HD2_Rotary145Rotary",
    category: "Modulation",
    subcategory: "Stereo",
    basedOn: "Leslie®^145",
    manualUrl: "https://jasonshimmy.com/music/effects/leslie/145"
}, {
    id: "HD2_RingModulatorAMRingMod",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_RingModulatorPitchRingMod",
    category: "Modulation",
    subcategory: "Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_ChorusPlastiChorus",
    category: "Modulation",
    subcategory: "Stereo",
    basedOn: "Modded Arion SCH-Z Chorus",
    manualUrl: "https://jasonshimmy.com/music/effects/arion/sch-z-chorus"
}, {
    id: "HD2_TremoloPattern",
    category: "Modulation",
    subcategory: "Stereo",
    basedOn: "Lightfoot Labs© Goatkeeper",
    manualUrl: "https://jasonshimmy.com/music/effects/lightfoot-labs/goatkeeper"
}, {
    id: "HD2_DelayDoubleDouble",
    category: "Modulation",
    subcategory: "Stereo",
    basedOn: "Line 6 Original Doubler",
    synopsis: '<p>Check out this great resource for this effect on <a href="https://www.afteraudio.com/musings/blog/helix-double-take-double-tracker-explained">After Audio</a>.'
}, {
    id: "HD2_PhaserPebblePhaser",
    basedOn: "Electro-Harmonix® Small Stone phaser",
    buyUrl: "https://amzn.to/37r8Ct7",
    manualUrl: "https://jasonshimmy.com/music/effects/electro-harmonix/small-stone",
    firmwareVersion: "2.90",
    category: "Modulation",
    subcategory: "Mono, Stereo"
}, {
    id: "L6SPB_PolyChorus",
    basedOn: "Line 6 Original",
    firmwareVersion: "3.00",
    category: "Modulation",
    subcategory: "Mono",
    synopsis: "Great for those who avoid traditional chorus pedals."
}, {
    id: "HD2_RetroReel",
    basedOn: "Line 6 Original",
    firmwareVersion: "3.10",
    category: "Modulation",
    subcategory: "Mono",
    synopsis: "<p>Line 6 Original effect that simulates playing a signal back from an analog tape machine. This signal can be distorted, filtered to sound older or more lo-fi, and modulated with a Wow/Flutter control</p><ul><li><strong>Wow Fluttr</strong>: Determines how much warbly tape sound is heard</li><li><strong>Saturation</strong>: Adds an analog tape saturation and at high enough settings, distortion. At lower settings, it's great for simply warming up a tone</li><li><strong>Low Cut</strong>: Determines the frequency of the Low Cut (High Pass) filter. At higher settings, can provide a lo-fi effect</li><li><strong>High Cut</strong>: Determines the frequency of the High Cut (Low Pass) filter. At lower settings, can provide the natural high-end roll-off of old tape</li><li><strong>Tape Speed</strong>: Changes both the rate of the modulation applied by the Wow Fluttr control and the filtering response of the analog tape emulation</li><li><strong>Level</strong>: Sets the overall level of the block</li></ul><p><strong>Tip:</strong> Helix Native users should definitely try Retro Reel on all sorts of tracks—vocals, drums, keyboards, strings, busses, effects returns, you name it. Anything that needs a bit more punch or vibe.</p>"
}, {
    id: "HD2_ChorusAmpegLiquifier",
    basedOn: "Ampeg Liquifier",
    manualUrl: "https://jasonshimmy.com/music/effects/ampeg/liquifier",
    buyUrl: "https://amzn.to/32ojRCT",
    firmwareVersion: "3.15",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: `<ul><li>Rate—Adjusts the speed of the chorus' low-frequency oscillator (LFO) from slow to fast.</li><li>Depth—Adjusts the amplitude of the modulation, from mild to deep.</li><li>Mix—Controls the wet/dry mix of the chorus. When set to 0%, no chorus is heard; when set to 100%, no dry signal is heard</li><li>Type—Liquifier is actually two choruses in one, hence the "Dual" default. If you'd prefer it to behave more like a traditional chorus pedal, choose "Single"</li><li>Headroom—Some mod pedals' internal signal paths exhibit a bit of grit, especially when placed after a high-gain amp block. Negative values increase the perceived amount of grit; positive values clean things up a bit. At 0dB, the model behaves like the original pedal</li><li>Level—Sets the overall level of the block</li></ul>`
}, {
    id: "TapeEater",
    basedOn: "Line 6 Original",
    firmwareVersion: "3.15",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: "<p>If you've ever had a cassette player eat a tape before you'll know what we're talking about. Try this with a slow speed setting and a 100% wet mix.</p>"
}, {
    id: "Warble_Matic",
    basedOn: "Line 6 Original",
    firmwareVersion: "3.15",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: "<p>This effect is reminiscent of the Sweeper model, but when used subtly it can produce a nice mild phasey sound or with Depth maxed out you can simulate the sound of an alien spacecraft landing in one of those old 50's sci-fi movies.</p>"
}, {
    id: "SampleAndHold",
    basedOn: "Line 6 Original",
    firmwareVersion: "3.15",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: "<p>This has a similar effect as the old Oberheim® Voltage Controlled Filter. It creates changes in tone by randomly emphasizing certain frequencies. Try pressing the Speed knob to lock it to tempo and playing single chords to that tempo.</p>"
}, {
    id: "Sweeper",
    basedOn: "Line 6 Original",
    firmwareVersion: "3.15",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: "<p>Imagine having 2 wah pedals on steroids separated in a stereo field that are pulsating in opposite positions and you're close to what you'll hear here. Use the Q and Freq parameters to set the character of the sweep and adjust Depth to go from subtle to full on freak out. Any resemblance to guitar tracks heard in a particular genre of B films is strictly coincidental.</p>"
}, {
    id: "HD2_MM4OptoTremolo",
    basedOn: "Line 6 Original",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: "Based on the optical tremolo circuit that was used in the blackface Fender® amps, like the '64 Deluxe Reverb®."
}, {
    id: "HD2_MM4BiasTremolo",
    basedOn: "1960 Vox® AC- 15 Tremolo",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/amps/vox/ac15",
    synopsis: "Based on the 1960 Vox® AC- 15 Tremolo, which got its pulse by literally varying the bias of the power amp tubes."
}, {
    id: "HD2_MM4PatternTrem",
    basedOn: "Line 6 Original",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: "Inspired by the Lightfoot Labs Goatkeeper. This effect is what you'd get if you could hook up a vintage keyboard sequencer to a tremolo."
}, {
    id: "HD2_MM4Phaser",
    basedOn: "Line 6 Original",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: "Inspired by the MXR® Phase 90. Our model features additional parameters to take you there and back again."
}, {
    id: "HD2_MM4DualPhaser",
    basedOn: "Mu-Tron® Bi-Phase",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/musitronics/mu-tron-bi-phase",
    synopsis: "Known for its big jet sound."
}, {
    id: "HD2_MM4PannedPhaser",
    basedOn: "Ibanez® Flying Pan",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/ibanez/flying-pan",
    synopsis: "It's a 4-stage phase shifter with a panner built in."
}, {
    id: "HD2_MM4BarberpolePhaser",
    basedOn: "Line 6 Original",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: "A classic effect from the world of modular synths. This phaser either sounds like it's always going up or always down depending on how you set it. Set to stereo you get both!"
}, {
    id: "HD2_MM4ScriptPhase",
    basedOn: "MXR® Phase 90",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/mxr/phase-90",
    synopsis: `Just one knob, Speed, like the original "script logo" version. Just add brown sound and you'll be "Talking' Bout Love."`
}, {
    id: "HD2_MM4UVibe",
    basedOn: "Uni-Vibe®",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/shin-ei/uni-vibe",
    synopsis: `One listen to "Machine Gun" and you'll be hooked on this effect model!`
}, {
    id: "HD2_MM4AnalogFlanger",
    basedOn: "Line 6 Original",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: "Inspired by the classic MXR® Flanger."
}, {
    id: "HD2_MM4JetFlanger",
    basedOn: "Line 6 Original",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: "Inspired by the A/DA Flanger. Compared to the Analog Flanger, this model is more dramatic, with a different wave shape."
}, {
    id: "HD2_M13ACFlanger",
    basedOn: "MXR® Flanger",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/mxr/117-flanger",
    synopsis: `You've heard it on Van Halen's Fair Warning, Women and Children First, and "Unchained".`
}, {
    id: "HD2_M1380AFlanger",
    basedOn: "A/DA Flanger",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/ada/flanger",
    synopsis: "Based on the A/DA Flanger with its signature jet-like sweep. True to the original, this model features the same knob functions as the classic."
}, {
    id: "HD2_MM4AnalogChorus",
    basedOn: "Boss® CE-1 Chorus Ensemble",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/ce-1-chorus-ensemble",
    synopsis: "Based on the Boss® CE-1 Chorus Ensemble, the original stompbox chorus with big, warm and groovy chorus tones."
}, {
    id: "HD2_MM4TriChorus",
    basedOn: "Song Bird / DyTronics Tri-Stereo Chorus",
    manualUrl: "https://jasonshimmy.com/music/effects/song-bird-dytronics/tri-stereo-chorus",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: "Based on the Song Bird / DyTronics Tri-Stereo Chorus. You may have never seen one, but you've heard it hundreds of times."
}, {
    id: "HD2_MM4Panner",
    basedOn: "Line 6 Original",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: "This effect pans back and forth between your left and right channels. If you try and run it in mono, it's basically tremolo."
}, {
    id: "HD2_MM4RotaryDrum",
    basedOn: "Fender® Vibratone",
    manualUrl: "https://jasonshimmy.com/music/effects/fender/vibratone",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: 'Based on the Fender® Vibratone. This rotating speaker effect was a popular hit with SRV. Think "Cold Shot."'
}, {
    id: "HD2_MM4RotaryDrumHorn",
    basedOn: "Leslie® 145",
    manualUrl: "https://jasonshimmy.com/music/effects/leslie/145",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: "A tube-driven rotating speaker cabinet. It was made for the B3 but guitarists fell in love with this shimmery effect."
}, {
    id: "HD2_MM4Dimension",
    basedOn: "Roland® Dimension D",
    manualUrl: "https://jasonshimmy.com/music/effects/roland/dimension-d",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: "One of the first true stereo chorus units. Relatively subtle in it's nature, it became an industry standard for double-track effects."
}, {
    id: "HD2_MM4RingModulator",
    basedOn: "Line 6 Original",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: "Ring modulators are for those special times when you want different, weird, strange and otherwise nontraditional guitar sounds."
}, {
    id: "HD2_MM4FrequencyShifter",
    basedOn: "Line 6 Original",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: "A ring modulator gives you both up and down shifted frequencies. Here you can select just the up or down shifted frequencies."
}, {
    id: "HD2_Chorus4Voice",
    basedOn: "Line 6 Original",
    firmwareVersion: "3.50",
    category: "Modulation",
    subcategory: "Mono, Stereo"
}, {
    id: "VIC_FlexoVibe",
    basedOn: "Line 6 Original",
    firmwareVersion: "3.50",
    category: "Modulation",
    subcategory: "Mono, Stereo"
}, {
    id: "HD2_Rotary3Rotor",
    basedOn: "Roland RA-200",
    firmwareVersion: "3.60",
    category: "Modulation",
    subcategory: "Mono, Stereo",
    synopsis: `<p>"The Line 6 Triple Rotary is inspired by the Yamaha RA-200 Rotary speaker. The original RA-200 was a combo solid state amplifier designed to be used with organs much like other rotary speakers. However; the RA-200 unit was unique compared to the traditional rotary speakers, which typically have rotating horns and a rotating drum over a woofer, the Yamaha designs had midrange speakers which rotated vertically on top of a traditional non-rotating speaker cabinet.</p><p>"To make the model more versatile, we made this effect to behave more as a stereo effect rather than modeling the whole cabinet, and suggest using the effect in combination with a cabinet model if recording direct or listening through FRFR systems."</p><p>—Sam Hwang, Sound Designer</p><ul><li>Speed—Sets whether the speaker reflects the Slow Speed or Fast Speed</li><li>Slow Speed—Sets the rate for the Slow Speed. Press the knob to toggle between a static rate (0.0 ~ 10.0) or note values for syncing with Tap Tempo and incoming MIDI clock</li><li>Fast Speed—Sets the rate for the Fast Speed. Press the knob to toggle between a static rate (0.0 ~ 10.0) or note values for syncing with Tap Tempo and incoming MIDI clock</li><li>Ramp Time—Adjusts how fast switching from Slow Speed to Fast Speed and back takes place</li><li>Mix—Controls the wet/dry mix of the rotary effect. When set to 0%, no rotary effect is heard; when set to 100%, no dry signal is heard</li><li>Level—Controls the overall output level of the block</li><li>Drive—Controls the amount of drive into the speaker's power amp</li><li>Headroom—Adds up to 12.0dB of additional headroom</li><li>Low Cut—Applies a low cut (high pass) filter to the speakers, letting you remove the effected signal below a certain frequency</li><li>High Cut—Applies a high cut (low pass) filter to the speakers, letting you remove the effected signal above a certain frequency</li><li>Wobble—Models how evenly the rotating speaker and its ballast weight are balanced about the axis. At zero, the speaker and ballast are perfectly balanced, and as the wobble control is increased the rotation of the speakers becomes more eccentric.</li><li>Separation—The separation of the stereo field. Practically, this simulates moving the two listening points further apart as the separation knob is increased</li><li>Rotor Drift—Adjusts how close the three rotor motors are in sync with each other in speed. As each of the rotors were belt driven, there are often some differences in belt or motor wear, and it creates some subtle modulation effects between the three rotors</li><li>Rotor 2 Lvl—Sets the individual volume of the second rotor</li><li>Rotor 3 Lvl—Sets the individual volume of the third rotor</li></ul>`
}, {
    id: "HD2_DelaySimpleDelay",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_DelayModChorusEcho",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_DelayDualDelay",
    category: "Delay",
    subcategory: "Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_DelayMultitap4",
    category: "Delay",
    subcategory: "Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_DelayMultitap6",
    category: "Delay",
    subcategory: "Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_DelaySweepEcho",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_DelayDuckedDelay",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "TC Electronic® 2290",
    manualUrl: "https://jasonshimmy.com/music/effects/tc-electronic/2290"
}, {
    id: "HD2_DelayReverseDelay",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_DelayVintageDigitalV2",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_DelayTransistorTape",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Maestro® Echoplex EP-3",
    manualUrl: "https://jasonshimmy.com/music/effects/maestro/echoplex-ep-3"
}, {
    id: "HD2_DelayHarmonyDelay",
    category: "Delay",
    subcategory: "Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_DelayBucketBrigade",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "BOSS® DM-2",
    buyUrl: "https://amzn.to/3dxh5Pr",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/dm-2-analog-delay"
}, {
    id: "HD2_DelayAdriaticDelay",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "BOSS® DM-2 w/ Adrian Mod",
    buyUrl: "https://amzn.to/3dxh5Pr",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/dm-2-analog-delay"
}, {
    id: "HD2_DelayElephantMan",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Electro-Harmonix® Deluxe Memory Man",
    buyUrl: "https://amzn.to/2ZwJkFr",
    manualUrl: "https://jasonshimmy.com/music/effects/electro-harmonix/deluxe-memory-man",
    synopsis: '<p><strong>Mix</strong>: Allows you to vary the mix of direct and delayed signals; it is set to the center position equal levels of both.</p><p><strong>Feedback</strong>: Provides delay repeats, or multiple echoes. If set very high, runaway oscillation will occur. Fairly high feedback with short delay settings produces a reverb effect.</p><p><strong>Time</strong>: Determines the time between direct and delayed signals, and between the repeats when feedback is used. Strange, eerie and unusual pitch-shift effects can be produced by changing the delay while playing, especially while using feedback.</p><p><strong>Mode</strong>: Allows you to choose between Chorus or Vibrato mode.</p><p>The Vibrato mode produces a "Doppler" pitch shifting effect in the delayed signal. A rich, vibrant chorus effect is produced with the switch set to CHORUS, delay fairly short, blend at the center, chorus set high, and feedback fairly high.</p><p><strong>Depth</strong>: The DEPTH control sets the amount of modulation in the delay time. The modulation rate is slow for chorus and faster for vibrato.</p>',
    notableUsers: `<p>The Foo Fighters make extensive use of the Memory Man alongside a Pro Co Rat into a Vox AC-30 on their third album, There's Nothing Left to Lose. See the following excerpts:</p><p><strong>What was the fundamental guitar-sound recipe for the new album?</strong></p><p>We focused on not using too many distortion pedals, and went for a cleaner, fatter, more natural overdrive. We used a Vox AC30 for pretty much everything on the record, tweaking the sound so that it broke up nicely when played loud.</p><p>Sometimes we'd double a track using an old Pro Co Rat, and then hard-pan the parts so that a super-distorted guitar was in the left channel and a grindy guitar was in the right. Then we'd sprinkle in lots of clean guitar overdubs.</p><p><strong>How did you get the undulating tone on "Breakout"?</strong></p><p>That's the Memory Man through the Vox. We tried to set the wave of the phase so that it was in sync with the rhythm of the song.</p><p><strong>Note:</strong> It is believed Mr. Grohl mispoke here and actually meant the MXR Phase 90 (Script Mod Phase) with its speed knob set around 11 o'clock.</p><p><strong>"Headwires" is filled up with so many guitar parts, yet the mix doesn't sound cluttered.</strong></p><p>Oh yeah -- Adam's good with that stuff. The main riff is an Explorer playing through the Memory Man and the Vox, and the harmonics were done with the same setup. The choruses are the Duo Jet running through a Rat and the Vox. The high, picking part in the middle eight is an SG through the Memory Man.</p><p>Check out the rest of this <a href="https://www.fooarchive.com/features/guitarplayer99.htm">fantastic interview</a> with Dave Grohl from a 1999 issue of Guitar Player Magazine for more details.</p>`
}, {
    id: "HD2_DelayPitch",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_DelaySwellVintageDigital",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_DelaySwellAdriatic",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_DelayCosmosEcho",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Roland® RE-201 Space Echo",
    manualUrl: "https://jasonshimmy.com/music/effects/roland/re-201-space-echo"
}, {
    id: "HD2_DelayMultiPass",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "L6SPB_InfSustain",
    firmwareVersion: "3.00",
    category: "Delay",
    subcategory: "Mono",
    basedOn: "Line 6 Original",
    synopsis: "Infinite sustain with a modulated poly pitch engine built in."
}, {
    id: "Victoria_ShufflingDelay",
    firmwareVersion: "3.00",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Performance delay that lets you freely manipulate the repeats' behavior in real-time."
}, {
    id: "Victoria_EuclideanDelay",
    firmwareVersion: "3.10",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: `<p>Line 6 Original delay based on Euclidean rhythm algorithms. Settle in because this one'll require diagrams and charts and whatnot.</p><ul><li><strong>Time</strong>: Sets the delay time; press the knob to toggle between ms/sec and note values</li><li><strong>Feedback</strong>: Controls the overall number of repeats heard for the entire sequence. If you want to hear all fills in the sequence only once, set to "0%"</li><li><strong>Steps</strong>: Determines the number of steps in the sequence (1-16; see diagram below)</li><li><strong>Fill</strong>: Using Euclidean math, evenly distributes fills in the sequence with repeats (1-16; see diagram below)</li><li><strong>Rotate</strong>: Rotates all fills forward by the same amount (0-15; see diagram below). Used If you like the sound of a repeat pattern but want the fills and gaps shifted forward</li><li><strong>Mix</strong>: Controls the wet/dry mix of the delay. When set to 0%, no delay is heard; when set to 100%, no dry signal is heard</li><li><strong>Low Cut</strong>: Applies a low cut (or high pass) filter to the fills, letting you remove the effected signal below a certain frequency</li><li><strong>High Cut</strong>: Applies a high cut (or low pass) filter to the fills, letting you remove the effected signal above a certain frequency</li><li><strong>Level</strong>: Controls the overall output level of the block</li><li><strong>Trails</strong>: When on, delay repeats continue to ring out after the block is bypassed</li></ul><img src="/images/release-notes-3.10-steps.png" alt="Euclidean Delay Steps" /><p><strong>Tip</strong>: Add two Euclidean Delays in parallel for interesting polyrhythm patterns. When using a stereo playback system, try panning Paths A and B in the mixer to L100 and R100.</p><p>If you'd like to read more about Euclidean rhythms, check this out: <a href="https://en.wikipedia.org/wiki/Euclidean_rhythm">https://en.wikipedia.org/wiki/Euclidean_rhythm</a></p>`
}, {
    id: "HD2_DelayHeliosphere",
    firmwareVersion: "3.15",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: `<ul><li>Time—Sets the delay time. Press the knob to toggle between ms/Sec and note values</li><li>Feedback—Controls the overall number of repeats. To hear only one repeat, set to 0%</li><li>Rate—Controls the rate or speed of modulation</li><li>Depth—Controls the depth or amount of modulation</li><li>Mix—Controls the wet/dry mix of the delay. When set to 0%, no delay is heard; when set to 100%, no dry signal is heard</li><li>Level—Sets the overall level of the block</li><li>Scale—For stereo delays, the Time parameter sets the left side. The right side's time is always some percentage of the left's time, and is determined by the Scale parameter. For example, if Time is set to 500ms, and Scale is set to 70%, the left delay is 500ms and the right delay is 350ms (or 70% of 500ms). When scale is set to 100%, left and right delays are the same</li><li>Rev Mix—Controls the wet/dry mix of the reverb inside the delay's feedback loop. When set to 0%, no reverb is heard</li><li>Rev Decay—Sets the decay of the reverb</li><li>Headroom—Some delay pedals' internal signal paths exhibit a bit of grit, especially when placed after a high-gain amp block. Negative values increase the perceived amount of grit; positive values clean things up a bit. At 0dB, the model behaves like the original pedal</li><li>Trails—When set to "Off," delay repeats are instantly muted when the block is bypassed. When set to "On," delay repeats continue to decay naturally when the block is bypassed or a different snapshot is selected</li></ul>`
}, {
    id: "HD2_DelayADT",
    firmwareVersion: "3.15",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: `<ul><li>Delay 1, Delay 2—Sets the delay time for each deck. Delay 1 can go up to 20ms and Delay 2 can go up to 200ms</li><li>WowFlutr1, WowFlutr2—Determines how much warbly tape sound is heard for each deck</li><li>Saturate1, Saturate2— Adds analog tape saturation and at high enough settings, distortion. At lower settings, it's great for simply warming up a tone</li><li>Deck 1 Vol, Deck 2 Vol—Sets the level of each deck independently. Deck 2 is a bit lower than Deck 1 by default</li><li>Deck 2 Pol—Flips the polarity of deck 2</li><li>Mod Rate—Controls the rate or speed of modulation applied to Deck 2</li><li>ModDepth—Controls the depth or amount of modulation applied to Deck 2</li><li>Level—Sets the overall level of the block</li><li>TapeSpeed—Changes both the rate of the modulation applied by the WowFluttr control and the filtering response of the analog tape emulation</li><li>Texture— Adjusts the amount of the NAB tape EQ in the simulated tape path. When Saturation is set to 0.0, the texture is invisible. When Saturation is turned up, the texture will affect the tightness (or looseness) of the distortion</li><li>Low Cut—Applies a low cut (high pass) filter to the decks, letting you remove the effected signal below a certain frequency</li><li>High Cut—Applies a high cut (low pass) filter to the decks, letting you remove the effected signal above a certain frequency</li><li>Deck 1 Pan, Deck 2 Pan—Pans each deck left and right</li><li>EnvThresh—Sets the level above which engages the envelope. When on, picking harder can impart very slight pitch fluctuations by tweaking Deck 2's delay. Subtle, but fun</li><li>Trails—When set to "Off," delay repeats are instantly muted when the block is bypassed. When set to "On," delay repeats continue to decay naturally when the block is bypassed or a different snapshot is selected</li></ul>`
}, {
    id: "VIC_DelayStutterEdit",
    firmwareVersion: "3.15",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: `<p>Tesselator&nbsp;is part morphing delay, part loop sampler, part drone machine...&nbsp;it's stellar for creating rhythmic pads,&nbsp;textures, or pitch/filter ramp effects&nbsp;to play over and has been placed in the Delay category so you can run multiple instances at once.&nbsp;Once audio is captured and repeating, you can effectively transition/morph between two states—First and Last,&nbsp;each with its own time, speed/pitch, HP filter, and LP filter—by applying increasing amounts to each repeat until the target settings are reached.</p><ol><li>Assign Tesselator to a stomp footswitch.&nbsp;It's bypassed by default.</li><li>Play a chord and while it's ringing, press the Tesselator switch.&nbsp;Audio captured BEFORE the switch press is&nbsp;repeated and manipulated by the following parameters:</li></ol><ul><li>First—Determines the length of the first step in the sequence, that is, the length of&nbsp;repeated audio when first engaged.&nbsp;Press the knob&nbsp;to toggle between ms and note values</li><li>Last—Determines the length of the last step in the sequence. If shorter than the First step's time, the sequence will get shorter; if longer than the First step's time, the sequence will get longer. If First and Last are the same time, the sequence length remains constant (<i>Ex. 1</i> below). Press the knob to toggle between ms and note values</li><li>Steps—Determines how many steps there are in the sequence (1 ~ 50). For example, if your&nbsp;first step is 100ms and&nbsp;your last step&nbsp;is 500ms, each successive step in the sequence will lengthen&nbsp;from 100ms to 500ms. The more steps you have, the longer it takes to reach the last step and therefore, the longer it takes to alter the sequence's characteristics</li><li>Direction—Determines the direction of the steps:<ul><li>Forward: Each step&nbsp;plays&nbsp;back normally (<i>Ex. 2a</i> below)</li><li>Reverse: Each step&nbsp;plays&nbsp;back in reverse (<i>Ex. 2b</i> below)</li><li>Fwd/Rev: Steps alternate between forward and reverse&nbsp;(<i>Ex. 2c</i> below)</li></ul></li><li>Boomerang—When off, the last step in the sequence repeats indefinitely. When on, all steps&nbsp;play&nbsp;forward, then backward, then forward again, etc. (<i>Ex. 3a</i> below)</li><li>Operation—Determines what happens to your signal when&nbsp;Tesselator is turned on (remember, it's bypassed by default)<ul><li>"Mute All"—When Tesselator is on, THE&nbsp;ENTIRE PATH IS MUTED</li><li>"Dry Kill"—When Tesselator is on, only the effected signal is heard. <i>TIP:</i> With Tesselator on a parallel path, assign a second stomp switch to toggle between Mute All and Dry Kill. This lets you leave the block enabled and bring the effected signal in and out by switching between the two values</li><li>"Normal" (default)—When Tesselator is on, both the dry and effected signals are heard</li></ul></li><li>Type—Determines whether any speed/pitch changes across the sequence reference a static or semitone value<ul><li>"Speed" (default)—Sets the target speed of the last step.&nbsp;Use the Speed parameter to set the specific value (0.0x speed ~ 2.0x speed)</li><li>"Pitch"—Sets the target pitch of the last step. Use the Pitch parameter to set the value (-12 ~ +12 semitones; see <i>Ex. 3c</i> below)</li></ul></li><li>Speed—Sets the target speed for&nbsp;the last step. For example, if set to "2.0x," the last step will be twice as fast as the first step and if set to "0.0x,"&nbsp;the last step will appear to stop completely.&nbsp;Disabled unless Type is set to "Speed"</li><li>Pitch—Sets the target pitch for&nbsp;the last step. For example, if set to "-12", the last step will be an octave lower than the first step.&nbsp;Disabled unless Type is set to "Pitch" (see Ex. 3c below)</li><li>HP Filter—Very different from Helix's traditional Low Cut and High Cut filters. Sets the high-pass (low cut) filter <i>target</i> for the last step. For example, if set to a higher value, each successive step will filter out more bass&nbsp;until the last step of the sequence</li><li>LP Filter—Very different from Helix's traditional Low Cut and High Cut filters. Sets the low-pass (high cut) filter <i>target</i> for the last step. For example, if set to a higher value, each successive step will filter out more treble&nbsp;until the last step of the sequence (<i>Ex. 3b</i>&nbsp;below)</li><li>FX Level—Controls the level of the effected signal</li><li>Level—Controls the overall output level of the block</li></ul><p><i>Woohoo! More charts and diagrams!</i></p><p>Tesselator is capable of hundreds of unique sounds, and it's impossible to illustrate them all, but here&nbsp;are a few examples:</p><p><i>Example&nbsp;1</i>: If Knob 1 (First) and Knob 2 (Last) are set to the same value (say, 1/4 note), the same length of audio repeats until Tesselator is bypassed. In this case, it acts very much like Delay &gt;&nbsp;Ratchet, except the audio is captured BEFORE the stomp press, not after.</p><p><i>Example&nbsp;2:</i> If Knob 2 (Last) is set to a shorter time than Knob 1 (First), steps in the sequence progressively get shorter (<i>Ex. 2a</i>). If Last is set to a longer time than First, steps in the sequence progressively get longer.&nbsp;The last step is repeated indefinitely until Tesselator is bypassed.&nbsp;Setting Direction to "Reverse" (<i>Ex. 2b</i>) reverses all steps; setting Direction to "Fwd/Rev" (<i>Ex. 2c</i>)&nbsp;alternates between forward and reversed steps.</p><p><i>Example&nbsp;3:</i> Turning Boomerang to "On" plays the entire step sequence forward, then backward, then forward again, etc. (<i>Ex. 3a</i>)&nbsp;Increasing LP Filter to a higher value progressively darkens each step in the sequence (<i>Ex. 3b</i>). Increasing HP Filter to a higher value progressively thins out each step in the sequence.&nbsp;Setting Type to "Pitch" and Pitch to a value other than "0" will change the pitch of each step until it lands on the target pitch at the last step. For example, if Pitch is set to "+5" and you play an E note, the last note in the sequence will be an A, or 5 steps higher (<i>Ex. 3c</i>). If you want the last A note to repeat indefinitely instead of stepping back down to E, turn Boomerang back to "Off."</p><p><i>TIP:</i>&nbsp;You can change all of these parameters while Tesselator is... tessellating, to create evolving, engaging soundscapes. Run it into&nbsp;Pitch &gt;&nbsp;Dual Pitch&nbsp;and&nbsp;Reverb &gt;&nbsp;Shimmer&nbsp;and prepare to waste hours in drone land.</p><p><img src="/images/tesselator-chart.png" alt="Tesselator Chart" /></p>`
}, {
    id: "HD2_DelayCrissCross",
    firmwareVersion: "3.15",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: `<ul><li>Time A, Time B—Sets the delay time for each of the two delay lines. Press the knob to toggle between ms/Sec and note values</li><li>Feedbk A, Feedback B—Controls the number of repeats for each delay line. To hear only one repeat, set to 0%</li><li>Pan A, Pan B—To achieve the widest stereo field, set Pan A to L100 and Pan B to R100</li><li>Mix—Controls the wet/dry mix of the delay. When set to 0%, no delay is heard; when set to 100%, no dry signal is heard</li><li>Level—Sets the overall level of the block</li><li>Crossfeed—Controls the amount of the A delay line fed back into the B delay line and vice versa</li><li>Headroom—Some delay pedals' internal signal paths exhibit a bit of grit, especially when placed after a high-gain amp block. Negative values increase the perceived amount of grit; positive values clean things up a bit. At 0dB, the model behaves like the original pedal</li><li>Mod Rate—Controls the rate or speed of modulation</li><li>Mod Depth—Controls the depth or amount of modulation</li><li>Shape—Sets the modulation's wave shape (Sine or Triangle)</li><li>Phase—Determines the modulation's phase relationship between the two delay lines. At 0°, the delay lines modulate together; at 180°, modulation is inverted from one another</li><li>Bit Depth—Lowers the bit depth of the delay repeats for a grungier sound. For more transparent results, set to "24 bits"</li><li>Sample Rate—Lowers the sample rate of the delay repeats for a grungier sound. For more transparent results, set to "48kHz"</li><li>Low Cut—Applies a low cut (high pass) filter to the repeats, letting you remove the effected signal below a certain frequency</li><li>High Cut—Applies a high cut (low pass) filter to the repeats, letting you remove the effected signal above a certain frequency</li><li>Trails—When set to "Off," delay repeats are instantly muted when the block is bypassed. When set to "On," delay repeats continue to decay naturally when the block is bypassed or a different snapshot is selected</li></ul>`
}, {
    id: "VIC_DelayRatchet",
    firmwareVersion: "3.15",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: `<p>A buffer sampler/delay. Used to capture and loop a short snippet of audio (whose length is determined by the Time parameter)&nbsp;while the block is enabled. Great for rhythmic stutter effects. You could almost consider Ratchet a simplified version of Tesselator, where the audio is captured AFTER the footswitch press, not before.</p><ol><li>Assign Ratchet to a stomp footswitch.&nbsp;It's bypassed by default.</li><li>While playing, press the Ratchet switch.&nbsp;Audio captured AFTER the switch press is&nbsp;repeated for as long as the block is enabled. For this reason, it may be best to make the switch momentary, and only step on the Ratchet switch when you change chords, almost like a really messed up (and by messed up, we mean awesome)&nbsp;sustain pedal.</li></ol><ul><li>Time—Predetermines the length of the audio to be recorded and looped. To loop an entire 4/4 bar, choose "1/1"; to stutter your playing, start with "1/16" or "1/32"</li><li>Operation—Determines what happens to your signal when&nbsp;Ratchet is turned on (remember, it's bypassed by default)<ul><li>"Mute All"—When Ratchet is on, THE&nbsp;ENTIRE PATH IS MUTED</li><li>"Dry Kill"—When Ratchet is on, only the effected signal is heard. <i>TIP:</i> With Ratchet on a parallel path, assign a second stomp switch to toggle between Mute All and Dry Kill. This lets you leave the block enabled and bring the effected signal in and out by switching between the two values</li><li>"Normal" (default)—When Ratchet is on, both the dry and effected signals are heard</li></ul></li><li>FX Level—Controls the level of the looped audio</li><li>Level—Controls the overall output level of the block</li></ul>`
}, {
    id: "L6PhazeEko",
    firmwareVersion: "3.15",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "<p>Starting with the basic tone of our EP-1 tape delay emulation, they've added something very much like a Uni-Vibe to the delay repeats. The result is an echo unit that gives you unique new creative possibilities for adjusting the tone of your delays with a beautiful, burbling texture.</p>"
}, {
    id: "L6BubbleEcho",
    firmwareVersion: "3.15",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "<p>Bubble Echo has a sample-and-hold filter on the repeats. It takes a filter sweep (like the one on Sweep Echo), chops it up into little bits, and rearranges them semi-randomly, so that it sounds like sudden little bits of wah pedal randomly sprinkled about.</p>"
}, {
    id: "HD2_DL4TubeEchoStereo",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Maestro® EP-1",
    manualUrl: "https://jasonshimmy.com/music/effects/maestro/echoplex-ep-1",
    synopsis: "Some say the holy grail of delay. Like PB&J...tubes and tape is one great combination!"
}, {
    id: "HD2_DL4TapeEchoStereo",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Maestro® EP-3 Echoplex",
    manualUrl: "https://jasonshimmy.com/music/effects/maestro/echoplex-ep-3",
    synopsis: "The EP-3 used transistors instead of tubes for the sound electronics."
}, {
    id: "HD2_DL4MultiheadStereo",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Roland® RE-101 Space Echo",
    manualUrl: "https://jasonshimmy.com/music/effects/roland/re-101-space-echo",
    synopsis: "This model emulates the multiple playback heads of the original for that multi-tap delay effect."
}, {
    id: "HD2_DL4AnalogDelayStereo",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Boss® DM2 Analog Delay",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/dm-2-analog-delay",
    buyUrl: "https://amzn.to/3qfY4pn",
    synopsis: "Treasured for its warm, distorted delays only a bucket brigade delay can produce!"
}, {
    id: "HD2_DL4AnalogDelayStereoMod",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Electro-Harmonix® Deluxe Memory Man",
    manualUrl: "https://jasonshimmy.com/music/effects/electro-harmonix/deluxe-memory-man",
    buyUrl: "https://amzn.to/3Em2XlB",
    synopsis: "An analog delay with chorus."
}, {
    id: "HD2_DelayPingPong",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "This effect has two separate channels of delay, with the output of each channel flowing into the other, going back and forth like a game of ping pong."
}, {
    id: "HD2_DL4Reverse",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "!seltaeB eht dna xirdneH imiJ ekil tsuJ — Take a step back in time. Whatever you play in comes back out at you backwards, delayed by the time you set (up to 2 seconds)."
}, {
    id: "HD2_DL4AutoVolStereo",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "This model gives you two effects in one. A volume fade- in swell used for a bowing effect. The other effect is an echo, complete with tape-style wow and flutter modulation."
}, {
    id: "HD2_DL4EchoPlatterStereo",
    category: "Delay",
    subcategory: "Mono, Stereo",
    basedOn: "Binson EchoRec",
    manualUrl: "https://jasonshimmy.com/music/effects/binson/echorec",
    buyUrl: "https://amzn.to/32pIbnV",
    synopsis: "A staple for the likes of Pink Floyd. Rather than using tape, the EchoRec used a magnetic platter to record and play back."
}, {
    id: "HD2_ReverbPlate",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Based on a studio Plate reverb. Similar to the spring, in its metallic resonant quality. Plate reverbs consisted of a thin metal sheet suspended inside a box."
}, {
    id: "HD2_ReverbRoom",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Simulates the acoustic properties of a classic echo chamber, which was a room used in early recording studios for reverb effects."
}, {
    id: "HD2_ReverbChamber",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original",
    synopsis: "An elongated ambient space such as a hall, stairwell or elevator shaft creates this reverb type. Dreamy."
}, {
    id: "HD2_ReverbHall",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Simulates the sound of a concert hall or large open space with a strong reverb tail. Imagine a gymnasium, performance hall, or cathedral."
}, {
    id: "HD2_ReverbEcho",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Just like it says ...echo... echo...echo. This is a lush echo with reverb."
}, {
    id: "HD2_ReverbTile",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Emulates the acoustic reflections of a tiled room, such as a bathroom or shower, with clearer/brighter discrete early reflections."
}, {
    id: "HD2_ReverbCave",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Surreal cavernous echo chamber. I'm just a simple caveman... Your world frightens and confuses me... what more can be said."
}, {
    id: "HD2_ReverbDucking",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Built using a 'Hall' but with a ducking effect. The volume of your reverb is “ducked” (reduced) while you're playing, and increases when you stop."
}, {
    id: "HD2_ReverbOcto",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Creates a lush, ambient space with a harmonized decay whose harmonic denseness is controlled by the time knob. Use volume swells and prepare to float on cloud 9!"
}, {
    id: "HD2_Reverb63Spring",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Based on a 1963 brown spring reverb head unit. Best known for great surf guitar tone!"
}, {
    id: "HD2_ReverbSpring",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Based on a studio spring reverb. A spring reverb's characteristic resonant sound was created by springs suspended inside a metal box. Sweet!"
}, {
    id: "HD2_ReverbParticle",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original",
    synopsis: "A Line 6 original that turns your chords into a lush modulated pad in stable mode. Critical mode adds a slight rise in pitch. All stops are removed when in Hazard mode."
}, {
    id: "HD2_ReverbGlitz",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_ReverbGanymede",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_ReverbSearchlights",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_ReverbPlateaux",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_ReverbDoubleTank",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "VIC_ReverbRotating",
    firmwareVersion: "3.10",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original",
    synopsis: `<p>Here is a description of each parameter:</p><ul><li><strong>Decay</strong>: Sets the decay of the reverb (0.1 sec ~ 45.0 sec, or Infinity) TIP: Assign a second stomp switch to toggle between a lower Decay value and Infinity. Label it "ForEVER ever?"</li><li><strong>Predelay</strong>: Determines the amount of delay heard before the signal enters the hall. Can sometimes result in more definition between the dry and effected signals</li><li><strong>Room Size</strong>: Sets the size of the hall (10, 20, or 30 meters). NOTE: This parameter actually changes the algorithm so you'll hear a small bump when changing it. Therefore, we don't recommend assigning Room Size to snapshots or other controllers</li><li><strong>Diffusion</strong>: Sets the amount of smearing between discrete echoes, sometimes resulting in a softer effected signal</li><li><strong>Damping</strong>: Determines the frequency above which the reverb will be absorbed. For example, if your hall is full of people wearing fake ocelot jumpsuits, more high frequencies would be absorbed than if the room were empty</li><li><strong>Mix</strong>: Controls the wet/dry mix of the reverb. When set to 0%, no reverb is heard; when set to 100%, no dry signal is heard</li><li><strong>Motion</strong>: Sets the amount of randomization, which can be helpful to minimize any metallic artifacts common in static reverbs. At higher values, can impart a bit of modulation to the effected signal</li><li><strong>Low Freq</strong>: Sets the frequency below which the Low Gain parameter is applied</li><li><strong>Low Gain</strong>: Sets the reverb time for frequencies below the Low Freq value. Values below 0.0dB mean the bass frequencies decay faster than the treble frequencies; values above 0.0dB mean the bass frequencies decay slower than the treble frequencies</li><li><strong>Low Cut</strong>: Applies a low cut (or high pass) filter to the reverb, letting you remove the effected signal below a certain frequency</li><li><strong>High Cut</strong>: Applies a high cut (or low pass) filter to the reverb, letting you remove the effected signal above a certain frequency</li><li><strong>Level</strong>: Controls the overall output level of the block</li><li><strong>Trails</strong>: When on, reverb decay continues to ring out after the block is bypassed</li></ul>`
}, {
    id: "HD2_ReverbHxSpring",
    firmwareVersion: "3.10",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original",
    synopsis: '<p>Here is a description of each parameter:</p><ul><li><strong>Dwell</strong>: Adjusts the strength of the signal sent into the spring tank. Higher values result in a longer decay</li><li><strong>Spring Count</strong>: Sets how many springs are in the tank (1, 2, or 3, and numerous values in between)</li><li><strong>Drip</strong>: Adjusts the intensity of the spring reverb, or how much "ploink" you might hear</li><li><strong>Low Cut</strong>: Applies a low cut (or high pass) filter to the reverb, letting you remove the effected signal below a certain frequency</li><li><strong>High Cut</strong>: Applies a high cut (or low pass) filter to the reverb, letting you remove the effected signal above a certain frequency</li><li><strong>Mix</strong>: Controls the wet/dry mix of the reverb. When set to 0%, no reverb is heard; when set to 100%, no dry signal is heard</li><li><strong>Level</strong>: Controls the overall output level of the block</li><li><strong>Trails</strong>: When on, reverb decay continues to ring out after the block is bypassed</li></ul>'
}, {
    id: "VIC_DynPlate",
    firmwareVersion: "3.15",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original",
    synopsis: `<p>A plate reverb typically found in high-end studio rack reverbs.</p><ul><li>Decay—Sets the decay of the reverb (0.1 sec ~ 45.0 sec, or Infinity)</li><li>Predelay—Determines the amount of delay heard before the signal enters the plate. Can sometimes result&nbsp;in more definition between the dry and effected signals</li><li>Damping—Determines the&nbsp;frequency above which&nbsp;the reverb will be absorbed. For example, if your hall is full of people wearing fake&nbsp;ocelot jumpsuits, more high frequencies would be&nbsp;absorbed than if the room were empty</li><li>MotRate—Motion Rate, or how fast the echoes' intensity changes, due to changes in plate tension or temperature</li><li>MotRng—Motion Range, or how much the internal delays change. Similar to the modulation control on older tank reverbs</li><li>Mix—Controls the wet/dry mix of the reverb. When set to 0%, no reverb is heard; when set to 100%, no dry signal is heard</li><li>Low Freq—Sets the frequency below which the Low Gain parameter is applied</li><li>Low Gain—Sets the reverb time for frequencies below the Low Freq value. Values below&nbsp;0.0dB mean the bass frequencies decay faster than the treble frequencies; values above 0.0dB mean the bass frequencies decay slower than the treble frequencies</li><li>Low Cut—Applies a low cut (or high pass) filter to the reverb, letting you remove the effected signal below a certain frequency</li><li>High Cut—Applies a high cut (or low pass) filter to the reverb, letting you remove the effected signal above a certain frequency</li><li>Level—Controls the overall output level of the block</li><li>Trails—When set to "Off," the reverb decay&nbsp;is&nbsp;instantly muted when the block is bypassed. When set to "On," the reverb continues to decay naturally when the block is bypassed or a different snapshot is selected</li></ul>`
}, {
    id: "VIC_ReverbDynRoom",
    firmwareVersion: "3.15",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original",
    synopsis: `<p>A room reverb typically found in high-end studio rack reverbs.</p><ul><li>Decay—Sets the decay of the reverb (0.1 sec ~ 3.0 sec)</li><li>Predelay—Determines the amount of delay heard before the signal enters the room. Can sometimes result&nbsp;in more definition between the dry and effected signals</li><li>Damping—Determines the&nbsp;frequency above which&nbsp;the reverb will be absorbed. For example, if your room is full of people wearing foam high school mascot costumes, more high frequencies would be&nbsp;absorbed than if the room were empty</li><li>Diffusion—Sets the amount of smearing between discrete echoes, sometimes resulting in a softer effected signal</li><li>MotRate—Motion Rate, or how&nbsp;quickly the room's shape may be&nbsp;changing, due to people moving, doors opening or closing, etc.</li><li>Mix—Controls the wet/dry mix of the reverb. When set to 0%, no reverb is heard; when set to 100%, no dry signal is heard</li><li>Low Freq—Sets the frequency below which the Low Gain parameter is applied</li><li>Low Gain—Sets the reverb time for frequencies below the Low Freq value. Values below&nbsp;0.0dB mean the bass frequencies decay faster than the treble frequencies; values above 0.0dB mean the bass frequencies decay slower than the treble frequencies</li><li>Low Cut—Applies a low cut (or high pass) filter to the reverb, letting you remove the effected signal below a certain frequency</li><li>High Cut—Applies a high cut (or low pass) filter to the reverb, letting you remove the effected signal above a certain frequency</li><li>EarlyReflc—</li><li>Level—Controls the overall output level of the block</li><li>Trails—When set to "Off," the reverb decay&nbsp;is&nbsp;instantly muted when the block is bypassed. When set to "On," the reverb continues to decay naturally when the block is bypassed or a different snapshot is selected</li></ul>`
}, {
    id: "VIC_ReverbShimmer",
    firmwareVersion: "3.15",
    category: "Reverb",
    subcategory: "Stereo",
    basedOn: "Line 6 Original",
    synopsis: '<p>A shimmer reverb.</p><p>We originally planned to release Shimmer as two distinctly different reverbs—Luster and Sheen—but combining them into a single model and letting you seamlessly switch back and forth via a footswitch or snapshots seemed cooler.</p><ul><li>Type—Determines the type of shimmer effect applied. TIP: Assign Type to a footswitch (or snapshots) to try both within the same preset</li><li>"Luster"—More of a traditional, reverb pedal-type shimmer effect with tighter definition in the lustery bits</li><li>"Sheen" (default)—More of a lush, studio plugin-type shimmer effect with a massive, sheeny bloom</li><li>Pitch 1—Sets the interval of the first pitchshifter. Set to "Oct Up" for more traditional shimmer sounds; set to "Oct Down" for something a bit creepier. Note that Pitch 1 and Pitch 2 have 0.1 semitone resolution between -1and +1</li><li>Pitch 2—Sets the interval of the second pitchshifter</li><li>Intensity—Controls the mix between the pitchshifted and non-pitchshifted reverb</li><li>Feedback—Numbers of times the pitchshifting recirculates through the reverb</li><li>Pitch Blend—Controls how much of Pitch 1 is heard vs. Pitch 2 (set to "Even" by default)</li><li>Mix—Controls the wet/dry mix of the reverb. When set to 0%, no reverb is heard; when set to 100%, no dry signal is heard</li><li>Decay—Sets the decay of the reverb (0.1 sec ~ 45.0 sec or Infinity)</li><li>Predelay—Determines the amount of delay heard before the signal enters the room. Can sometimes result in more definition between the dry and effected signals</li><li>Room Size—Sets the size of the room (10, 20, or 30 meters)</li><li>Damping—Determines the frequency above which the reverb will be absorbed</li><li>Diffusion—Sets the amount of smearing between discrete echoes, sometimes resulting in a softer effected signal</li><li>Motion—Sets the amount of randomization, which can be helpful to minimize any metallic artifacts common in static reverbs. At higher values, can impart a bit of modulation to the effected signal</li><li>Low Cut—Applies a low cut (or high pass) filter to the reverb, letting you remove the effected signal below a certain frequency</li><li>High Cut—Applies a high cut (or low pass) filter to the reverb, letting you remove the effected signal above a certain frequency</li><li>Level—Controls the overall output level of the block</li><li>Trails—When set to "Off," the reverb decay is instantly muted when the block is bypassed. When set to "On," the reverb continues to decay naturally when the block is bypassed or a different snapshot is selected</li></ul>'
}, {
    id: "VIC_ReverbDynAmbience",
    basedOn: "Line 6 Original",
    firmwareVersion: "3.50",
    category: "Reverb",
    subcategory: "Mono, Stereo"
}, {
    id: "VIC_ReverbDynBloom",
    basedOn: "Line 6 Original",
    firmwareVersion: "3.70",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    synopsis: `<ul><li>Decay—Sets the decay of the reverb (0.1 sec ~ 45.0 sec, or Infinity).</li><li>Damping—Determines the frequency above which the reverb will be absorbed. For example, if your hall is full of people wearing fake ocelot jumpsuits, more high frequencies would be absorbed than if the room were empty.</li><li>Mot Rate—Motion Rate, or how fast the echoes' intensity changes, due to changes in plate tension or temperature.</li><li>Rise Time—Sets how long it takes for the reverb to bloom. Choose Short, Medium (default), or Long.</li><li>Mix—Controls the wet/dry mix of the reverb. When set to 0%, no reverb is heard; when set to 100%, no dry signal is heard.</li><li>Low Freq—Sets the frequency below which the Low Gain parameter is applied.</li><li>Low Gain—Sets the reverb time for frequencies below the Low Freq value. Values below 0.0dB mean the bass frequencies decay faster than the treble frequencies; values above 0.0dB mean the bass frequencies decay slower than the treble frequencies.</li><li>Low Cut—Applies a low cut (or high pass) filter to the reverb, letting you remove the effected signal below a certain frequency.</li><li>High Cut—Applies a high cut (or low pass) filter to the reverb, letting you remove the effected signal above a certain frequency.</li><li>Ducking—Controls how much of the reverb is dropped in volume (or "ducked") while the signal is active. Higher values drop the reverb level more while you play.</li><li>Level—Sets the overall level of the block.</li><li>Trails—When set to "Off," reverb decay is instantly muted when the block is bypassed. When set to "On," the reverb continues to decay naturally when the block is bypassed or a different snapshot is selected.</li></ul>`
}, {
    id: "HD2_ReverbNonLinear",
    basedOn: "Line 6 Original",
    firmwareVersion: "3.70",
    category: "Distortion",
    subcategory: "Mono, Stereo",
    synopsis: `<ul><li>Decay—Sets the decay of the reverb (1.0 ms ~ 2.000 sec). Press the knob to toggle between ms/sec and note values. <strong>TIP: When set to note values, playing a note/chord 4 beats (Decay set to "1/1") or 2 beats (Decay set to "1/2") before a song transition can cause the reverb to stop right on the downbeat.</strong></li><li>Predelay—Determines the amount of delay heard before the signal enters the reverb. Shape—Determines the shape of the reverb's decay:<ul><li>Linear—Traditional reverse reverb with an even, linear slope; abruptly stops after the decay length.</li><li>Log—Reverse reverb with a logarithmic curve so it starts low and ramps up toward the decay's end.</li><li>Inverse Log—Reverse reverb with an inverse logarithmic curve so it ramps up quickly.</li><li>Gauss—Ramps up and then down in a gaussian curve shape.</li><li>Inverse Gauss—Ramps down and then up in a gaussian curve shape.</li><li>Triangle—Ramps up and then down in a triangle shape.</li><li>Inverse Triangle—Ramps up and then down in a triangle shape.</li><li>Full—No ramp at all; the reverb is on full blast for the duration of the decay and then abruptly stops after the decay length.</li></ul></li><li>Late Dry—</li><li>Mix—Controls the wet/dry mix of the reverb. When set to 0%, no reverb is heard; when set to 100%, no dry signal is heard.</li><li>Level—Sets the overall level of the block.</li><li>Diffusion—Sets the amount of smearing between discrete echoes, sometimes resulting in a softer effected signal.</li><li>Low Cut—Applies a low cut (or high pass) filter to the reverb, letting you remove the effected signal below a certain frequency.</li><li>High Cut—Applies a high cut (or low pass) filter to the reverb, letting you remove the effected signal above a certain frequency.</li><li>Mod—Controls the amount of modulation applied to the reverb.</li><li>Rate—Controls the rate or speed of modulation applied to the reverb.</li><li>Spread (Stereo version only)—Determines the stereo width or spread of the effected signal.</li><li>Trails—When set to "Off," reverb decay is instantly muted when the block is bypassed. When set to "On," the reverb continues to decay naturally when the block is bypassed or a different snapshot is selected.</li></ul>`
}, {
    id: "HD2_PitchPitchWham",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Digitech Whammy®",
    buyUrl: "https://amzn.to/3ukuoJ1",
    manualUrl: "https://jasonshimmy.com/music/effects/digitech/whammy"
}, {
    id: "HD2_PitchTwinHarmony",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Eventide® H3000",
    manualUrl: "https://jasonshimmy.com/music/effects/eventide/h3000"
}, {
    id: "HD2_PitchSimplePitch",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_PitchDualPitch",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_SynthSubtractive",
    category: "Pitch/Synth",
    subcategory: "Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_Synth3NoteGenerator",
    category: "Pitch/Synth",
    subcategory: "Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_Synth4OSCGenerator",
    category: "Pitch/Synth",
    subcategory: "Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "L6SPB_PolyPitch",
    firmwareVersion: "3.00",
    category: "Pitch/Synth",
    subcategory: "Mono",
    basedOn: "Line 6 Original"
}, {
    id: "L6SPB_PolyWham",
    firmwareVersion: "3.00",
    category: "Pitch/Synth",
    subcategory: "Mono",
    basedOn: "Line 6 Original",
    synopsis: "Automatically assigned to EXP 1 and the toe switch toggles it on and off."
}, {
    id: "L6SPB_PolyDowntune",
    firmwareVersion: "3.00",
    category: "Pitch/Synth",
    subcategory: "Mono",
    basedOn: "Line 6 Original",
    synopsis: "A Simpler version of Poly Pitch when you just want to transpose your playing."
}, {
    id: "L6SPB_12String",
    firmwareVersion: "3.00",
    category: "Pitch/Synth",
    subcategory: "Mono",
    basedOn: "Line 6 Original",
    synopsis: "12-string guitar emulation."
}, {
    id: "HD2_DM4BassOctaver",
    basedOn: "Line 6 Original",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    synopsis: "Inspired by the EBS OctaBass. This effect gives you a clean octave down signal. It is very popular in bass rigs but players such as Jeff Beck have been known to bust out this effect."
}, {
    id: "SynthLead",
    firmwareVersion: "3.15",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "<p>These are styled after popular analog monophonic synth lead sounds from Moog, ARP and Sequential Circuits.</p>"
}, {
    id: "SynthString",
    firmwareVersion: "3.15",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: '<p>This emulates classic synth string sounds like those found in the ARP Solina String Ensemble and the Elka® Synthex. The harder you pick, the brighter the sound. We somehow had two separate effects called "Synth String"—one from POD Farm 2.5 and the other from FM4, which was already added to Helix/HX in 1.50. Renamed the POD Farm version "String Theory" to avoid confusion.</p>'
}, {
    id: "SynthFX",
    firmwareVersion: "3.15",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: `<p>These sounds aren't really designed to be musical. These are more "special effects" sounds. You'll hear a lot of these kinds of sounds in movie soundtracks.</p>`
}, {
    id: "BuzzWave",
    firmwareVersion: "3.15",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "<p>These are cool combinations of saw and square waves with fast vibrato. The 8 different Wave parameters offer different vibrato speeds and different pitches.</p>"
}, {
    id: "RezSynth",
    firmwareVersion: "3.15",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "<p>These are all sweeping low pass filter effects with the resonance set high. Resonance is a peak at the frequency of the low pass filter.</p>"
}, {
    id: "Saturn5RingMod",
    firmwareVersion: "3.15",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "<p>Ring modulators take two signals (one supplied by your guitar, the other supplied by the effect) then adds and subtracts similar frequencies. Electro-Harmonix® makes a ring modulator pedal called the Frequency Analyzer that is a popular guitar effect. The only limiting factor is that the pitch of the signal provided by the effect is constant. Meaning you have to play only in the key of that pitch to be musical.</p>"
}, {
    id: "DoubleBass",
    firmwareVersion: "3.15",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "<p>This effect has two oscillators that track the pitch of your guitar—one square wave tuned one octave down, and one saw tooth wave two octaves down.</p>"
}, {
    id: "SeismicSynth",
    firmwareVersion: "3.15",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: '<p>This effect has an oscillator that tracks the pitch of your guitar. You can choose between 8 different wave shapes which give you different "flavors"—all of them one or two octaves down from the original pitch.</p>'
}, {
    id: "SynthAnalog",
    firmwareVersion: "3.15",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "<p>These are great for funky synth guitar (or bass) lines. These sounds were made popular by Moog and ARP.</p>"
}, {
    id: "SynthHarmony",
    firmwareVersion: "3.15",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "<p>If you loved those big synth leads from 70's era prog bands then you'll love this effect. There are two synth waves at work here. Your first two parameters allow you to choose a pitch interval of your original note played. The Wave parameter works differently from what you'd expect with the other synth models; here it controls the gain of the saw wave, while the square wave gain remains constant.</p>"
}, {
    id: "HD2_FM4OctiSynth",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Inspired by eight armed denizens of the deep. Everyone knows that all you need is a bottleneck and a reverb tank to get whale sounds, but how about our friend the Octopus?"
}, {
    id: "HD2_FM4Growler",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    manualUrl: "https://jasonshimmy.com/music/effects/musitronics/mu-tron-iii",
    synopsis: "R700 meets Mu-Tron® III. Grrrrrrrrr!"
}, {
    id: "HD2_M13TwoVoiceHarmony",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Inspired by the Eventide® H3000. This is a diatonic harmonizer. If you ever wished you had that second guitar player for dual guitar parts, this effect is for you."
}, {
    id: "HD2_FM4SynthOMatic",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Inspired by a collection of vintage analog synths. This model features waveforms captured from a mouth watering collection of vintage synths."
}, {
    id: "HD2_FM4AttackSynth",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Korg® X911 Guitar Synth",
    manualUrl: "https://jasonshimmy.com/music/effects/korg/x911-guitar-synth",
    synopsis: "Modeled after one of the waveforms in the X911, along with some of the wave shaping functions that are found on the original."
}, {
    id: "HD2_FM4SynthString",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    basedOn: "Roland® GR700 Guitar Synth",
    manualUrl: "https://jasonshimmy.com/music/effects/roland/gr700-guitar-synth",
    synopsis: "Your Filter Modeler's Synth String model is based on one of the sounds of the GR700."
}, {
    id: "VIC_PitchBoctaver",
    basedOn: "BOSS® OC-2 Octaver",
    buyUrl: "https://amzn.to/3g6SVOY",
    manualUrl: "https://jasonshimmy.com/music/effects/boss/oc-2-octaver",
    firmwareVersion: "3.50",
    category: "Pitch/Synth",
    subcategory: "Mono, Stereo",
    synopsis: "<p>The OC-2 Octave pedal lets users fatten up their sound by adding two additional tones--one and two octaves below the original note. Each tone has a separate volume control and plays back with outstanding clarity.</p>"
}, {
    id: "HD2_FilterMutantFilter",
    category: "Filter",
    subcategory: "Mono, Stereo",
    basedOn: "Musitronics® Mu-Tron® III",
    manualUrl: "https://jasonshimmy.com/music/effects/musitronics/mu-tron-iii"
}, {
    id: "HD2_FilterMysterFilter",
    category: "Filter",
    subcategory: "Mono, Stereo",
    basedOn: "Korg® A3",
    manualUrl: "https://jasonshimmy.com/music/effects/korg/a3"
}, {
    id: "HD2_FilterAutoFilter",
    category: "Filter",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_FilterAshevillePattrn",
    firmwareVersion: "2.80",
    category: "Filter",
    subcategory: "Mono, Stereo",
    basedOn: "Moog Moogerfooger Murf Filter",
    manualUrl: "https://jasonshimmy.com/music/effects/moog/moogerfooger-murf-filter"
}, {
    id: "HD2_FM4VoiceBox",
    category: "Filter",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: `Inspired by Vocoders, Vocal Tracts & Surgical Tubing. This model gives your guitar a sound that's typical of a classic "talk box."`
}, {
    id: "HD2_FM4VTron",
    category: "Filter",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: 'Voice Box meets Mu-Tron® III. In this model your guitar again "speaks" with an almost human voice, but now it does so in response to your playing.'
}, {
    id: "HD2_FM4Throbber",
    category: "Filter",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Inspired by the Electrix® Filter Factory. It's perfect for cool Electronica sounds."
}, {
    id: "HD2_FM4SpinCycle",
    category: "Filter",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Inspired by Craig Anderton's Wah/Anti-Wah. This is what headphone mixes were made for! Imagine two wahs panned left and right working opposite directions from each other."
}, {
    id: "HD2_FM4SlowFilter",
    category: "Filter",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "It's Swell! This triggered filter rolls off the high end of your tone, with adjustable speed. Your choice from dark to bright (the UP mode), or bright to dark (the DOWN mode)."
}, {
    id: "HD2_FM4CometTrails",
    category: "Filter",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "After several days spent crafting the code for our digital secret sauce, we found ourselves one afternoon surrounded by 10 empty cans of Dew, and sounds from another world."
}, {
    id: "HD2_FM4TronUp",
    category: "Filter",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: `Inspired by the Mu-Tron® III envelope follower in the "Up" position. Part auto-wah, part triggered filter, it's all about wacky.`
}, {
    id: "HD2_FM4TronDown",
    category: "Filter",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: 'Inspired by the Mu-Tron® III envelope follower in the "Down" position.'
}, {
    id: "HD2_FM4ObiWah",
    category: "Filter",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Based on the Oberheim® Voltage Controlled Sample and Hold filter. Voltage Controlled Filters create changes in tone by emphasizing random frequencies."
}, {
    id: "HD2_FM4Seeker",
    category: "Filter",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: 'Inspired by the Z-Vex Seek Wah. Imagine 8 "parked wah" filters set at varying positions and then sequenced through, creating a pulsating hypnotic vibe.'
}, {
    id: "HD2_FM4QFilter",
    category: "Filter",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: `Your very own parked wah! You've heard it before from Mark Knopfler and from Brian May of Queen—it's a wah "parked" in one position.`
}, {
    id: "HD2_WahUKWah846",
    category: "Wah",
    subcategory: "Mono, Stereo",
    basedOn: "Vox® V846",
    buyUrl: "https://amzn.to/3s5z0jX",
    manualUrl: "https://jasonshimmy.com/music/effects/vox/v846"
}, {
    id: "HD2_WahTeardrop310",
    category: "Wah",
    subcategory: "Mono, Stereo",
    basedOn: "Dunlop® Crybaby® Fasel model 310",
    buyUrl: "https://amzn.to/2NIOmMk",
    manualUrl: "https://jasonshimmy.com/music/effects/dunlop/crybaby-fasel-model-310"
}, {
    id: "HD2_WahFassel",
    synopsis: "Coveted for the mojo of it's Fasel inductor.",
    category: "Wah",
    subcategory: "Mono, Stereo",
    basedOn: "Dunlop® Cry Baby® Super",
    buyUrl: "https://amzn.to/2NFuV7r",
    manualUrl: "https://jasonshimmy.com/music/effects/dunlop/crybaby-super"
}, {
    id: "HD2_WahWeeper",
    synopsis: "Another variation of the original wah with a different inductor and other component choices.",
    category: "Wah",
    subcategory: "Mono, Stereo",
    basedOn: "Arbiter® Cry Baby",
    manualUrl: "https://jasonshimmy.com/music/effects/arbiter/cry-baby"
}, {
    id: "HD2_WahChrome",
    synopsis: "A successor to the original Clyde McCoy wah. Clyde is a trumpet player but guitarists everywhere thank him for suggesting Vox® create this effect.",
    category: "Wah",
    subcategory: "Mono, Stereo",
    basedOn: "Vox® V847",
    buyUrl: "https://amzn.to/3k3R6jv",
    manualUrl: "https://jasonshimmy.com/music/effects/vox/v847"
}, {
    id: "HD2_WahChromeCustom",
    synopsis: "Based on a modded Vox® V847 that has the gain staging on the first transistor stage tweaked, and aftermarket inductor, the Q widened, and replaced with a 470k pot.",
    category: "Wah",
    subcategory: "Mono, Stereo",
    basedOn: "Modded Vox® V847",
    buyUrl: "https://amzn.to/3k3R6jv",
    manualUrl: "https://jasonshimmy.com/music/effects/vox/v847"
}, {
    id: "HD2_WahThroaty",
    synopsis: "Geoffrey Teese meticulously crafts the clones of the original and rare Vox® Clyd McCoy “Picture” wah.",
    category: "Wah",
    subcategory: "Mono, Stereo",
    basedOn: "RMC Real McCoy 1",
    manualUrl: "https://jasonshimmy.com/music/effects/rmc/real-mccoy-1"
}, {
    id: "HD2_WahVettaWah",
    synopsis: "Taken from Line 6's guitar amplifier - Vetta II. This is our sound designers' take on a classic effect.",
    category: "Wah",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_WahColorful",
    synopsis: "We only modeled the wah section of course. This pedal is different in that it was an inductor-less design. It uses a different circuit to get its frequency resonance.",
    category: "Wah",
    subcategory: "Mono, Stereo",
    basedOn: "Colorsound® Wah-fuzz",
    manualUrl: "https://jasonshimmy.com/music/effects/colorsound/wah-fuzz"
}, {
    id: "HD2_WahConductor",
    synopsis: "According to original advertising material, this was not a 'wah-wah' pedal but a 'wow-wow' pedal. Po-tay-to or Po-tah-to?",
    category: "Wah",
    subcategory: "Mono, Stereo",
    basedOn: "Maestro® Boomerang",
    manualUrl: "https://jasonshimmy.com/music/effects/maestro/boomerang"
}, {
    id: "HD2_WahTeardropBassQ",
    firmwareVersion: "3.80",
    synopsis: "The Dunlop 105Q Cry Baby bass wah pedal is a specialized effect that enhances bass guitar tone without compromising low-end power. It focuses on midrange and high frequencies, allowing expressive wah effects while maintaining a thick sound. The pedal features a Q control for adjusting the wah effect's focus, custom circuitry optimized for bass, and auto-return switching for ease of use. This design offers bassists new creative possibilities while preserving their fundamental tone.",
    notableUsers: "The Dunlop 105Q Cry Baby bass wah is favored by renowned bassists such as Flea, Doug Wimbish, and Robert Trujillo.",
    category: "Wah",
    subcategory: "Mono, Stereo",
    basedOn: "Dunlop 105Q",
    manualUrl: "https://jasonshimmy.com/music/effects/dunlop/105q",
    buyUrl: "https://amzn.to/3y04BfR"
}, {
    id: "HD2_VolPanVol",
    category: "Volume/Pan",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_VolPanGain",
    category: "Volume/Pan",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_VolPanPan",
    category: "Volume/Pan",
    subcategory: "Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "HD2_VolPanStereoWidth",
    category: "Volume/Pan",
    subcategory: "Stereo",
    basedOn: "Line 6 Original (utility to collapse stereo paths)"
}, {
    id: "HD2_VolPanStereoImager",
    firmwareVersion: "3.00",
    category: "Volume/Pan",
    subcategory: "Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Used to increase the apparent stereo width of your signal when connecting Helix to two amps or a stereo playback system; just make sure there aren't any mono blocks after it!"
}, {
    id: "HD2_LooperOneSwitch",
    category: "Looper",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: '<p><strong>Using the 1 Switch Looper:</strong></p><ul><li>Add a Looper &gt; 1 Switch Looper block to your preset and assign it to a stomp footswitch. (Adding a 1 Switch Looper to HX Effects from Stomp view automatically assigns it to the selected footswitch.)</li><li>Press the 1 Switch Looper switch. The LED lights red, indicating the loop is recording.</li><li>Press the 1 Switch Looper switch again. The LED lights green, indicating the loop is playing back.</li><li>Press the 1 Switch Looper switch again. The LED lights amber, indicating the loop is in overdub mode. Subsequent presses of the switch toggle between play and overdub mode.</li><li>While the 1 Switch Looper is in play or overdub mode, press and hold the switch for 1 second. The most recent recording is undone. Holding the switch again will redo the recording. On Helix, Helix Rack/Control, and HX Effects, "UNDO" or "REDO" briefly appears on the scribble strip. On Helix LT, "UNDO" or "REDO" briefly appears in Performance view.</li><li>Quickly double-press the 1 Switch Looper switch. Playback/recording stops and the LED lights white, indicating a loop is in memory.</li><li>While Looper playback/recording is stopped, press and hold the switch. The recording is deleted and the LED lights dim white.</li></ul>'
}, {
    id: "HD2_Looper",
    category: "Looper",
    subcategory: "Stereo",
    basedOn: "Line 6 Original"
}, {
    id: "ShufflingLooper",
    firmwareVersion: "3.00",
    category: "Looper",
    subcategory: "Mono, Stereo",
    basedOn: "Line 6 Original",
    synopsis: "Part looper, part sampler, part inspiration generator, part performance instrument, the Shuffling Looper intelligently chops up your playing and gives you real-time control over reordering, octave shifting, reversing, and repeating. It's all immense fun (even on vocals, drums, and percussion), but you'll want to familiarize yourself with its controls."
}, {
    id: "HD2_AppDSPFlowSplitDyn",
    firmwareVersion: "2.90",
    category: "Split",
    basedOn: "Line 6 Original",
    synopsis: "This split block type lets you dynamically route signals to Path B, depending on how hard you play. For example, you could roll your guitar's volume back a bit and play clean chords through a Grammatico on Path A and then roll it back up and dig in to blend in a searing Revv Gen Purple lead on Path B"
}]
const Yy = [{
    id: "57 Dynamic",
    basedOn: "Shure® SM57",
    buyUrl: "https://amzn.to/3ueZ9yH",
    manualUrl: "https://cdn.shure.com/user_guide/upload/1554/us_pro_sm57_ug.pdf"
}, {
    id: "409 Dynamic",
    basedOn: "Sennheiser® MD 409",
    manualUrl: "https://www.manualslib.com/manual/345640/Sennheiser-Md-409-U-3.html"
}, {
    id: "421 Dynamic",
    basedOn: "Sennheiser® MD 421-U",
    buyUrl: "https://amzn.to/3pF5r7y",
    manualUrl: "https://www.coutant.org/md421u4/"
}, {
    id: "30 Dynamic",
    basedOn: "Heil Sound® PR 30",
    buyUrl: "https://amzn.to/2Zub5yt",
    manualUrl: "https://recordinghacks.com/microphones/Heil-Sound/PR-30"
}, {
    id: "20 Dynamic",
    basedOn: "Electro-Voice® RE20",
    buyUrl: "https://amzn.to/3qLpwdm",
    manualUrl: "https://www.electrovoice.com/product.php?id=91"
}, {
    id: "121 Ribbon",
    basedOn: "Royer® R-121",
    buyUrl: "https://amzn.to/3scazBH",
    manualUrl: "https://www.royerlabs.com/R-121.html"
}, {
    id: "160 Ribbon",
    basedOn: "Beyerdynamic® M 160",
    buyUrl: "https://amzn.to/3dsgw9w",
    manualUrl: "https://north-america.beyerdynamic.com/shop/media/datenblaetter/DAT_M160_EN_A2.pdf"
}, {
    id: "4038 Ribbon",
    basedOn: "Coles 4038",
    manualUrl: "https://www.sounddevices.dk/Sider/Produkter/Brochure_manual/Coles/Coles_4038_man.pdf"
}, {
    id: "414 Cond",
    basedOn: "AKG® C414 TLII",
    buyUrl: "https://amzn.to/2NzpQNP",
    manualUrl: "https://cloud.akg.com/7744/c414xls_xlii_manual.pdf"
}, {
    id: "84 Cond",
    basedOn: "Neumann® KM84",
    manualUrl: "https://www.manualslib.com/products/Neumann-Km-84-1953498.html"
}, {
    id: "67 Cond",
    basedOn: "Neumann® U67",
    buyUrl: "https://amzn.to/3dpLbEa",
    manualUrl: "https://www.neumann.com/?lang=en&id=hist_microphones&cid=u67_publications"
}, {
    id: "87 Cond",
    basedOn: "Neumann® U87",
    buyUrl: "https://amzn.to/37uT0oy",
    manualUrl: "https://www.americanmusical.com/ItemFiles/Manual/NEM_U87AI_manual.pdf"
}, {
    id: "47 Cond",
    basedOn: "Neumann® U47",
    buyUrl: "https://amzn.to/3pu3H0x",
    manualUrl: "https://www.neumann.com/?lang=en&id=hist_microphones&cid=u47_publications"
}, {
    id: "112 Dynamic",
    basedOn: "AKG® D112",
    buyUrl: "https://amzn.to/2ZtNduT",
    manualUrl: "https://cloud.akg.com/10968/d112mkii_qsg.pdf"
}, {
    id: "12 Dynamic",
    basedOn: "AKG® D12",
    buyUrl: "https://amzn.to/3pxu1qN",
    manualUrl: "https://cloud.akg.com/8294/d12vr_manual.pdf"
}, {
    id: "7 Dynamic",
    basedOn: "Shure® SM7",
    buyUrl: "https://amzn.to/3qzcGih",
    manualUrl: "https://cdn.shure.com/user_guide/upload/1565/us_pro_sm7_ug.pdf"
}]

export interface Helix {
    id: number;
    name: string;
    shortName: string;
    subcategories?: Subcategory[];
    models?: HelixModel[];
}

export interface HelixModel {
    id: string;
    name: string;
    basedOn?: string;
    notableUsers?: string;
    synopsis?: string;
    image: string;
    image_native?: string;
    //params: Array<{ [key: string]: null | string }[] | { [key: string]: null | string }>;
    parameters?: Array<HelixModelParam<string | number | boolean>>;
    hidden?: string;
    stereo?: boolean;
    bass?: boolean;
}

export interface Subcategory {
    name: string;
    id: number;
    models: HelixModel[];
}

export interface HelixModelParam<T> {
    name: string;
    id: string;
    valueType: number;
    min?: T;
    max?: T;
    defaultValue?: T;
}


const helixModelsInfoMap = new Map<string, Pick<HelixModel, "basedOn" | "synopsis" | "notableUsers">>();

addHelixModelInfo(Ky, helixModelsInfoMap);
addHelixModelInfo(Yy, helixModelsInfoMap);
addHelixModelInfo(Jy, helixModelsInfoMap);
addHelixModelInfo(Qy, helixModelsInfoMap);

const excluded_tags = ["Favorites", "Merge", "Split", "Output", "Input", "Looper", "Send/Return", "IR"];

const helix: Helix[] = helixModels as unknown as Helix[];

for (var h of helix) {
    if (h.subcategories) {
        for (var sub of h.subcategories) {
            if (sub.models.length === 0) {
                console.warn(`Subcategory ${sub.name} in Helix ${h.name} has no models.`);
                continue;
            }
            for (var m of sub.models) {
                const modelInfo = helixModelsInfoMap.get(m.id);
                if (modelInfo) {
                    m.basedOn = modelInfo.basedOn;
                    m.synopsis = modelInfo.synopsis;
                    m.notableUsers = modelInfo.notableUsers;
                }
            }
        }
    }


    if (!h.models) {
        continue; // skip if no models
    }

    for (var m of h.models) {
        const modelInfo = helixModelsInfoMap.get(m.id);
        if (modelInfo) {
            m.basedOn = modelInfo.basedOn;
            m.synopsis = modelInfo.synopsis;
            m.notableUsers = modelInfo.notableUsers;
        }   
    }

}

console.log("Helix models processed:", helixModelsInfoMap.size);
const helixModelsToProcess = ["Amp", "Cab", "Distortion"];

const subsetOfHelix: Helix[] = helix.filter(h => {
    if (helixModelsToProcess.includes(h.name)) {
        return true;
    }
});


const cabWithIrs = ["cabmicirs", "cab", "cabmicirswithpan"];

for (const h of subsetOfHelix) {
    const modelDataFromSoftware: any[] = [];
    if (h.name === "Cab") {
        for (var cab of cabWithIrs) {
            try {
                modelDataFromSoftware.push(...JSON.parse(fs.readFileSync(`C:\\Program Files (x86)\\Line6\\HX Edit\\res\\` + `${cab}.models`, "utf-8")));
            } catch (e) {
                console.warn(`Could not read ${cab}.models file:`, e);
            }
        }
    } else {
        modelDataFromSoftware.push(...JSON.parse(fs.readFileSync(`C:\\Program Files (x86)\\Line6\\HX Edit\\res\\` + `${h.name.toLowerCase()}.models`, "utf-8")));
    }

    for (sub of h.subcategories || []) {

        for (const m of sub.models) {
            const modelInfoFromSoftware = modelDataFromSoftware.find((model: any) => model.symbolicID === m.id || model.name === m.name);
            if (modelInfoFromSoftware) {
                m.parameters = [];
                if (modelInfoFromSoftware.params) {
                    for (const param of modelInfoFromSoftware.params) {
                        m.parameters.push(GetHelixModelParam(param));
                    }
                }
            } else {
                console.warn(`Model ${m.id} not found in ${h.name} subcategory ${sub.name}`);
            }
        }
    }

    if(!h.models){
        continue; // skip if no models
    }

    for (const m of h.models) {
        const modelInfoFromSoftware = modelDataFromSoftware.find((model: any) => model.symbolicID === m.id || model.name === m.name);
        if (modelInfoFromSoftware) {
            m.parameters = [];
            if (modelInfoFromSoftware.params) {
                for (const param of modelInfoFromSoftware.params) {
                    m.parameters.push(GetHelixModelParam(param));
                }
            }
        } else {
            console.warn(`Model ${m.id} not found in ${h.name}`);
        }
    }
}

fs.writeFileSync("helix_models_to_process.json", JSON.stringify(subsetOfHelix, null, 2), "utf-8");

//----------------------------fubnctoncs----------------------------//

function addHelixModelInfo(modelData: any, helixModelsInfoMap: Map<string, any>) {
    for (const model of modelData) {

        const modelData: Pick<HelixModel, "basedOn" | "synopsis" | "notableUsers"> = {
            basedOn: model.basedOn,
            synopsis: model.synopsis, //parse html to text
            notableUsers: model.notableUsers
        };

        if (Array.isArray(model.id)) {
            // handle array case here if needed
            for (const id of model.id) {
                helixModelsInfoMap.set(id, {
                    ...modelData,
                    name: id
                });
            }
        } else {
            helixModelsInfoMap.set(model.id, modelData);
        }

    }
}

function GetHelixModelParam(paramInfo: any): HelixModelParam<string | number | boolean> {

    if (!paramInfo || !paramInfo.name || !paramInfo.symbolicID || paramInfo.valueType == undefined) {
        console.log("Invalid parameter info provided");
    }

    var helixModelParam: HelixModelParam<string | number | boolean>;

    switch (paramInfo.valueType) {
        case 0://integer
            helixModelParam = {
                name: paramInfo.name,
                id: paramInfo.symbolicID,
                valueType: paramInfo.valueType,
                min: paramInfo.min !== undefined ? parseInt(paramInfo.min, 10) : undefined,
                max: paramInfo.max !== undefined ? parseInt(paramInfo.max, 10) : undefined,
                defaultValue: paramInfo.default !== undefined ? parseInt(paramInfo.default, 10) : undefined
            };
            //check if paramInfo.default is a decimal
            if (paramInfo.default && !Number.isInteger(paramInfo.default) || (paramInfo.min && !Number.isInteger(paramInfo.min)) ||
                (paramInfo.max && !Number.isInteger(paramInfo.max))) {
                console.warn(`Default value for ${paramInfo.name} is not an integer: ${paramInfo.default}`);
            }
            break;
        case 1: // float
            helixModelParam = {
                name: paramInfo.name,
                id: paramInfo.symbolicID,
                valueType: paramInfo.valueType,
                min: paramInfo.min !== undefined ? parseFloat(paramInfo.min) : undefined,
                max: paramInfo.max !== undefined ? parseFloat(paramInfo.max) : undefined,
                defaultValue: paramInfo.default !== undefined ? parseFloat(paramInfo.default) : undefined
            };
            break;
        case 2: // boolean
            helixModelParam = {
                name: paramInfo.name,
                id: paramInfo.symbolicID,
                valueType: paramInfo.valueType,
                min: paramInfo.min !== undefined ? Boolean(paramInfo.min) : undefined,
                max: paramInfo.max !== undefined ? Boolean(paramInfo.max) : undefined,
                defaultValue: paramInfo.default !== undefined ? Boolean(paramInfo.default) : undefined
            };
            break;
        default: // string
            console.log("Unhandled valueType:", paramInfo.valueType);


    }
    return helixModelParam;
}