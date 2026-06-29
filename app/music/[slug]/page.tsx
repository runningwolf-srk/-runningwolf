export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = RELICS[params.slug];
  const [isNarrating, setIsNarrating] = useState(false);
  const [storyMode, setStoryMode] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);
  const ambientRef = useRef<HTMLAudioElement>(null);
  const relicRef = useRef<HTMLAudioElement>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [isPaused, setIsPaused] = useState(false);

  if (!relic) return notFound();

  const prevRelic = relic.sagaPrev? RELICS[relic.sagaPrev] : null;
  const nextRelic = relic.sagaNext? RELICS[relic.sagaNext] : null;

  useEffect(() => {
    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      setVoices(v);
      const saved = localStorage.getItem('relic-voice');
      setSelectedVoice(saved || v.find(x => x.lang.startsWith('en'))?.name || "");
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  useEffect(() => {
    if (storyMode) {
      document.body.style.overflow = "hidden";
      ambientRef.current?.play().catch(() => {});
    } else {
      document.body.style.overflow = "auto";
      ambientRef.current?.pause();
      window.speechSynthesis.cancel();
      setIsNarrating(false);
      setIsPaused(false);
    }
  }, [storyMode]);

  const narrateStory = () => {
    if (isNarrating) return window.speechSynthesis.cancel(), setIsNarrating(false), setIsPaused(false);
    const t = `${relic.title}. ${relic.subtitle}. ${relic.story.map(s => `${s.title}. ${s.text}`).join('. ')} ${relic.meaning}`;
    const u = new SpeechSynthesisUtterance(t);
    const v = voices.find(v => v.name === selectedVoice);
    if (v) u.voice = v;
    u.rate = 0.85; u.pitch = 0.9;
    u.onend = () => { setIsNarrating(false); setIsPaused(false); };
    setIsNarrating(true);
    window.speechSynthesis.speak(u);
  };

  const pauseResumeNarration = () => {
    if (isPaused) window.speechSynthesis.resume();
    else window.speechSynthesis.pause();
    setIsPaused(!isPaused);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Your existing JSX goes here - unchanged */}
      {/* Just make sure NO }; is above this return */}
    </main>
  );
}
