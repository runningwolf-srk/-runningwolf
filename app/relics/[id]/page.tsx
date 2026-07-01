import Link from 'next/link'
import { notFound } from 'next/navigation'

const relics = [
  {
    id: 1,
    title: "HORN OF WAR",
    subtitle: "A BATTLE CRY. A LEGEND RISES.",
    videoId: "M4wGCg5oCx0",
    verse: "Blow the trumpet in Zion, declare a holy fast, call a sacred assembly.",
    ref: "Joel 2:1",
    devotional: [
      {
        heading: "The horn does not promise an easy battle.",
        text: "Vikings didn't blow horns to start parties. They blew them to end peace. The sound meant one thing: war has come. God uses the same language. When He says 'blow the trumpet,' He's not asking. He's commanding."
      },
      {
        heading: "It calls the faithful to stand.",
        text: "Standing is a choice. Retreating is easier. But the faithful don't negotiate with darkness. They don't make peace with what God called them to conquer. When the horn sounds, you either stand or you fall."
      }
    ]
  },
  {
    id: 2,
    title: "HEAVEN CALLING",
    subtitle: "THE ASCENT BEGINS.",
    videoId: "oxNauKuxg4Q",
    verse: "After this I looked, and there before me was a door standing open in heaven. And the voice I had first heard speaking to me like a trumpet said, 'Come up here, and I will show you what must take place after this.'",
    ref: "Revelation 4:1",
    devotional: [
      {
        heading: "Heaven is not passive.",
        text: "It calls. It invites. It commands ascent. You were not made to live in the valley of survival. You were called to the mountain of encounter. Vikings climbed for glory. We climb for God."
      }
    ]
  },
  {
    id: 3,
    title: "IRON COLLIDE",
    subtitle: "KINGDOMS CLASH.",
    videoId: "odIsEMUtNJI",
    verse: "Choose this day whom you will serve... but as for me and my house,
