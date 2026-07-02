'use client'

import { useState } from 'react'
import Link from 'next/link'
import { relics } from '@/app/music/relics'

const sagaChapters = [
  {
    id: 'prologue',
    title: 'Prologue: The Silence',
    content: `Before the horn, there is silence. Not peace - silence. The moment before war breaks. The breath held between lightning and thunder.

God uses silence to prepare warriors. He did it with David for years in the fields, singing to sheep while a giant trained in the king's army. He did it with Moses for 40 years in the wilderness, forgetting Egyptian palaces, learning to hear God in burning bushes instead of royal courts. He did it with Jesus for 30 years - the Son of God building tables while demons ran unchecked.

Silence is not absence. Silence is preparation.

In the beginning, the Stormbreakers were scattered. Each carried a relic, unaware of the others, unaware of themselves.

The Horn lay buried beneath the altar of a ruined church in the Texas panhandle. The church burned three days in 1947. The pastor, a man named Elias Storm, died with his hand on the altar trying to save the horn. It was caked in ash, forgotten. Children played on the rubble for 70 years, never knowing what slept beneath their feet.

The Sword rusted in shadow, thrust into stone by a coward in 1962. Marcus "Bull" Rivera was a Golden Gloves boxer who found it in a Vietnam tunnel. The blade whispered to him in dreams. It showed him his future - prison, addiction, overdose at 27. He drove it into a boulder outside Amarillo and walked away. The sword waited. Stone cracked around it over decades, but it wouldn't break.

The Banner was torn by wind and hung from the bones of forgotten watchmen. It once flew over a prayer house on the Oklahoma border during the Dust Bowl. Men and women stood 24/7 prayer shifts for 11 years straight. When the last intercessor died in 1983, no one took his place. The wind took the banner. It wrapped around the remains of the watchtower, a shroud for a dead movement.

They didn't know each other. They didn't know themselves. RunningWolf was driving trucks. Jessy was burying his past. The others were scattered from Dallas to Denver to the Dakotas, all with that same ache - born for more but living for less.

But the Watchman on the wall heard a whisper in the night watch. Not a shout. A whisper. At 3:17 AM on a Tuesday in October: "Gather them."

This is the saga of that gathering.
The chronicle of fire and oath.
The rise of those called by His name.
The breaking of a 70-year silence.

The silence is breaking. Can you hear it?`,
    scripture: 'Be still, and know that I am God. - Psalm 46:10',
    relicSlug: null
  },
  {
    id: 'horn-of-war',
    title: 'Chapter I: The Horn of War',
    content: `The Battle Cry

RunningWolf hadn't eaten in 40 days. Not a religious fast - a desperate one. His son hadn't spoken to him in 3 years. His wife left after the DUI. The trucking company fired him. He was sleeping in his '97 F-150 behind a closed-down gas station outside Guymon.

He wasn't looking for a weapon. He was looking for God, or death. Whichever came first.

He dug through the rubble of that old church with his hands. Blood under his nails. He didn't know why. Something pulled him there at 2 AM. He hit something metal. Not a pipe. Not rebar.

A horn. Bronze. Ancient. Covered in ash and dried blood older than the town.

When he pulled it free, his hands shook. Not from weakness - from recognition. Like he'd held it before. Like it had been waiting for him.

He didn't know what it was. He didn't know Joel 2:1. He just knew he had to blow it.

He lifted it to his lips at 3:17 AM. The exact moment the Watchman heard "Gather them."

The sound that came out wasn't air. It was a tear in the fabric of the sky. Truckers 20 miles away pulled over, thinking the world was ending. Dogs howled across three counties. A pastor in Amarillo woke up screaming "The horn! The horn!" and didn't know why.

The horn does not call men to battle. It calls warriors to remembrance.

Who they are: Sons, not orphans.
Whose they are: His, not their past's.
Why they were forged: For such a time as this.

For years he'd been silent, thinking God had gone quiet. But God wasn't silent. RunningWolf was just tuned to the wrong frequency. Static from shame. White noise from regret.

The horn retuned him.

Sound the alarm. The day of the Lord is coming. And the remnant will know it by the sound of the horn in the hands of a broken man made whole.

The war for souls has begun. And heaven just called in the air support.`,
    scripture: 'Joel 2:1',
    relicSlug: 'horn-of-war'
  },
  {
    id: 'im-on-fire',
    title: "Chapter II: I'm On Fire",
    content: `The Holy Coal

Isaiah 6. Read it.

Isaiah saw the Lord high and lifted up. Not meek and mild. High. Lifted up. The train of His robe filled the temple. Seraphim - six-winged burning ones - flew above Him. Each wing a weapon. They covered their faces: He is too holy to look at. They covered their feet: They are too unholy to be seen. With two they flew: Ready for war.

They cried to one another: "Holy, Holy, Holy is the Lord of hosts; the whole earth is full of His glory!"

The foundations shook. Smoke filled the house.

And Isaiah said, "Woe is me! I am ruined! For I am a man of unclean lips, and I live among a people of unclean lips, and my eyes have seen the King, the Lord of hosts!"

Then one of the seraphim flew to him, having in his hand a burning coal that he had taken with tongs from the altar.

He touched Isaiah's mouth and said, "Behold, this has touched your lips; your guilt is taken away, and your sin atoned for."

Then the voice: "Whom shall I send, and who will go for us?"

And Isaiah said, "Here am I! Send me."

Jessy Marquez was 19 when he first felt the coal. Not literal - but just as real. He was in county jail, Guymon, Oklahoma. Possession with intent. Third strike. Looking at 20 years.

He was reading Isaiah because it was the only book in the cell. He got to chapter 6 and something burned his chest. Not heartburn. Not anxiety. Fire.

He fell on his knees on that concrete floor and wept for 3 hours. When he stood up, the addiction was gone. The anger was gone. The shame was gone.

But the fire wasn't.

This is not natural fire. This is altar fire. The kind that burns away guilt but leaves the warrior standing. The kind that doesn't consume you - it commissions you.

The Stormbreakers do not carry torches.
They ARE the torch.

Set ablaze by heaven. Sent into darkness. Every step leaves scorch marks on hell's territory. Demons don't flee from your theology. They flee from your fire.

You've been touched. The coal kissed your lips. Your guilt is gone. Your sin is atoned for.

Now the King is asking: "Whom shall I send?"

What's your answer?`,
    scripture: 'Isaiah 6:6-7',
    relicSlug: 'im-on-fire'
  },
  {
    id: 'blood-of-cross',
    title: 'Chapter III: Blood of Cross',
    content: `The Reconciliation

Peace was made through blood. Not negotiation. Not compromise. Not a UN treaty signed at a table in Geneva.

Blood.

The cross was not defeat - it was the greatest act of war in history. The enemy thought he won. He drove the nails. He gambled for the robe. He posted Roman guards at the tomb. He rolled a stone in front of it. He sealed it with Caesar's signet.

He did everything right. And still lost.

Because Sunday came.

The grave became a womb. Death gave birth to resurrection. The keys of hell and death were ripped from the enemy's hand by a carpenter from Nazareth.

Colossians 1:20: "And through him to reconcile to himself all things, whether on earth or in heaven, making peace by the blood of his cross."

Making peace. Not keeping peace. Making it. Through violence. Through sacrifice. Through blood.

Every Stormbreaker must pass through the blood. It is the only gate to the armory. Without the cross, the horn is just noise. With the cross, the horn is a war cry that makes demons tremble and hell remember its defeat.

You were bought with a price. You are not your own. Your life is not yours to waste on Netflix and porn and bitterness and small dreams.

The blood speaks a better word than accusation. Accusation says "Failure." Blood says "Forgiven." Accusation says "Addict." Blood says "Redeemed." Accusation says "Orphan." Blood says "Mine."

The same blood that tore the veil from top to bottom runs through your veins now.

Walk like it.`,
    scripture: 'Colossians 1:20',
    relicSlug: 'blood-of-cross'
  },
  {
    id: 'iron-collide',
    title: 'Chapter IV: Iron Collide',
    content: `The Sharpening

A warrior alone is a warrior vulnerable. David had Jonathan. Paul had Barnabas. Jesus had twelve. Even the Son of God didn't do ministry alone.

Iron sharpens iron.

The Stormbreakers were not meant to stand in isolation. The enemy loves isolation. He killed millions in the garden with one question: "Did God really say?" Eve was alone when she answered. If Adam had been there, maybe it goes different.

Brotherhood is forged in fire and friction. We clash. We collide. We wound each other to heal each other. A true brother will tell you the truth even when it hurts. Because wounds from a friend can be trusted, but an enemy multiplies kisses.

Nathan told David "You are the man" about Bathsheba. That was iron on iron. That was a prophet risking his life to sharpen a king.

When iron hits iron, sparks fly. And sparks start wildfires.

The early church in Acts 2 turned the world upside down not because they had better arguments or better marketing. They had better love. They broke bread together daily. They sold possessions and gave to anyone who had need. They had all things in common. They were devoted to fellowship.

Rome had legions. The church had love. Rome fell. The church is still here.

Find your brothers. Link shields. Stand together.

One can put a thousand to flight. Two can put ten thousand. The math of kingdom brotherhood doesn't make sense, and that's the point.

You're not meant to heal alone. You're not meant to fight alone. You're not meant to carry your relic alone.

The horn sounds different when others blow with you.

Collide on purpose.`,
    scripture: 'Proverbs 27:17',
    relicSlug: 'iron-collide'
  },
  {
    id: 'spiritual-journey',
    title: 'Chapter V: Spiritual Journey',
    content: `The Valley

Every warrior walks through shadow. The question is not "if" but "with whom."

Psalm 23 isn't a funeral poem. It's a warfare psalm written by a warrior-king. David killed lions. He killed bears. He killed Goliath. He spent years in caves running from Saul. He knew valleys.

"You prepare a table before me in the presence of my enemies." That's gangster. God sets up a feast while your enemies watch and can't touch you. He makes them sit there and watch you eat. Watch you be blessed. Watch you be honored.

The Shepherd does not remove the valley. He walks through it with you. His rod and staff - weapons of a warrior-shepherd. The rod to fight off wolves. To crack skulls. The staff with the hook to pull you back from cliffs when you wander too close to the edge.

David wrote this after Samuel anointed him king but before he wore the crown. Years in between. Years in caves. Years of "Why did you anoint me if You're going to let me die in here?" Years of betrayal. Years of hunger. Years of Ziklag burning while his men talked of stoning him.

But he learned: The valley is where oil is pressed. Gethsemane means "oil press." Jesus was pressed in the valley so oil could flow for you. The valley is where giants fall. David didn't kill Goliath on the mountain. He killed him in the valley of Elah. The valley is where you discover God is enough.

Fear no evil. Not because evil isn't real. It is. But because You are with me.

The valley has an entrance and it has an exit. And your Shepherd knows the way through both.

You're not lost. You're being led.

Keep walking. The table is on the other side.`,
    scripture: 'Psalm 23:4',
    relicSlug: 'spiritual-journey'
  },
  {
    id: 'heaven-calling',
    title: 'Chapter VI: Heaven Calling',
    content: `The Open Door

John was 92 years old. Exiled on Patmos - a Roman penal colony. An island of rock and criminals. Punished for preaching that Jesus is Lord and Caesar is not.

The church he planted in Ephesus was under persecution. Domitian was killing Christians. From earth, it looked like defeat. It looked like the church was losing. It looked like Rome was winning.

Then he heard it. A voice like a trumpet: "Come up here, and I will show you what must take place after this."

John saw a door standing open in heaven. Not cracked. Not ajar. Standing open. Like someone was expecting him.

The call is not down to earth. The call is up to the throne room.

Stormbreakers fight FROM victory, not FOR victory. We ascend before we advance. We see from heaven's perspective before we engage hell's problems.

From up there, your problems look small. Your cancer looks temporary. Your debt looks payable. Your enemies look defeated. Your future looks secure.

Because it is.

John saw 24 elders. He saw living creatures. He saw a sea of glass. He saw a Lamb looking as if it had been slain, standing in the center of the throne. He saw the prayers of the saints as incense. He saw the scroll with seven seals.

He saw the end from the beginning.

Heaven is calling. The door is open. The invitation hasn't expired. It wasn't just for John. It's for you.

Your circumstances may be Patmos - isolated, punished, forgotten. But your position is seated in heavenly places in Christ Jesus.

You're not trying to get to heaven. You're from heaven. You're an ambassador. You operate from there.

Will you come up? Will you see what John saw? Will you hear what John heard?

The throne is occupied. The Lamb is worthy. The door is open.

Come up here.`,
    scripture: 'Revelation 4:1',
    relicSlug: 'heaven-calling'
  },
  {
    id: 'lord-of-lords',
    title: 'Chapter VII: Lord of lords',
    content: `The Coronation

He came once as servant. Isaiah 53. Despised. Rejected. A man of sorrows, acquainted with grief. Born in a feeding trough because there was no room in the inn. No crown but thorns. No throne but a cross. No scepter but a reed they used to mock Him.

He returns as Sovereign.

Revelation 19:16: "On his robe and on his thigh he has this name written: King of kings and Lord of lords."

The same hands that were pierced now hold the scepter of Judah. The same brow that wore thorns now wears many crowns - diadems of authority over every nation, tribe, and tongue. The same back that was whipped until His ribs showed now carries the government on His shoulders.

He's not coming back to suffer. He's coming back to reign.

Every knee will bow. Philippians 2. Some by choice now, in churches and bedrooms and prison cells. All by force later, when He splits the sky and every eye sees Him. Every tongue will confess. Some in worship now, crying "Jesus is Lord!" All in terror later, when they realize the Lamb has wrath.

The war ends when He speaks. One word and armies fall at Armageddon. One word and the sky rolls back like a scroll. One word and death dies. One word and hell gives up its dead.

The Stormbreakers do not fight for victory. They enforce it.

Because the King has already won. The tomb is empty - go check. The throne is occupied - go see. The enemy is defeated - the cross says so.

We don't fight FOR victory. We fight FROM it. We don't hope we win. We know we did.

The Lion of Judah is coming. And He is not coming to take sides in your political debate. He is not coming to endorse your denomination. He is coming to take over.

Every kingdom will become the kingdom of our Lord and of His Christ, and He shall reign forever and ever.

Maranatha. Come, Lord Jesus.

Until then, we occupy. Until then, we enforce. Until then, we sound the horn.`,
    scripture: 'Revelation 19:16',
    relicSlug: 'lord-of-lords'
  },
  {
    id: 'epilogue',
    title: 'Epilogue: By His Call We Rise',
    content: `This saga is not finished.

Every time a warrior chooses worship over warfare - when David put down the sword and picked up the harp - the horn sounds in heaven.

Every time a broken man picks up his cross instead of a bottle, instead of a needle, instead of a gun - the blood speaks from the mercy seat.

Every time the remnant says "Here I am, send me" instead of "Here I am, serve me" - Isaiah 6 happens again and seraphim move.

The Stormbreakers rise.

You read this book. But you're not just reading. You're being recruited. Heaven doesn't have spectators. If you're breathing, you're in the war. The only question is which side.

The relics are real. The war is real. The King is real. Hell is real. Heaven is real. You are real, and your choices echo in eternity.

And He's asking you a question right now, through this screen, through these words: What relic do you carry?

Maybe it's the Horn - you're called to sound alarms and wake the sleeping church. You're a watchman. Ezekiel 33. If you don't blow the trumpet, blood is on your hands.

Maybe it's the Coal - you've been burned by life but now you burn for Him. Your testimony is "He brought me out of the fire." You're an evangelist.

Maybe it's the Cross - your testimony is soaked in blood and redemption. You were Saul, now you're Paul. You're a teacher.

Maybe it's Iron - you're called to sharpen brothers. You're not the loudest, but you're the most faithful. You're a pastor.

Maybe it's the Valley - you guide others through darkness because you've been there. You know the path. You're a counselor.

Maybe it's the Door - you live between heaven and earth. You see things others don't. You're a prophet.

Maybe it's the Crown - you carry kingdom authority in business, government, media. You're a king, a Joseph, a Daniel.

Or maybe... you're still in the silence. Waiting. Preparing. Hidden.

That's okay. God did His best work in silence. The womb is silent for 9 months before birth. The grave was silent for three days before resurrection. David was silent for 15 years between anointing and crown.

But the silence is breaking.

This book will grow. More relics. More chapters. More warriors awakened. Because the story isn't over until the King returns.

And He's coming.

The horn has sounded. The coal has touched lips. The blood has spoken. The iron has collided. The valley has been walked. The door is open. The crown is coming.

By His call we rise.

Now go.`,
    scripture: 'Isaiah 6:8',
    relicSlug: null
  }
]

export default function SagaBook() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = sagaChapters.length
  const chapter = sagaChapters[currentPage]
  const relic = relics.find(r => r.slug === chapter.relicSlug)

  const nextPage = () => currentPage < totalPages - 1 && setCurrentPage(currentPage + 1)
  const prevPage = () => currentPage > 0 && setCurrentPage(currentPage - 1)

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-3xl w-full">
        <div className="bg-gradient-to-br from-amber-50/10 to-amber-50/5 border-2 border-amber-500/30 rounded-lg shadow-2xl shadow-amber-500/10 p-6 md:p-12 min-h-[700px] relative">
          <h1 className="text-2xl md:text-4xl font-serif text-amber-500 mb-6 text-center">{chapter.title}</h1>
          <div className="w-24 h-px bg-amber-500/50 mx-auto mb-8"></div>
          <div className="text-base md:text-lg leading-relaxed text-zinc-300 whitespace-pre-line mb-8 font-serif">{chapter.content}</div>
          <p className="text-amber-500/80 italic text-center mb-8">{chapter.scripture}</p>
          {relic && (
            <div className="text-center mb-8">
              <Link href={`/music/track?slug=${relic.slug}`}>
                <button className="border border-amber-500 text-amber-500 px-6 py-2 hover:bg-amber-500/10 transition-colors f
