import Link from "next/link";
import { ArrowUpRight, Flame, Trophy, Users } from "lucide-react";
import { Eyebrow, PublicNav } from "../ui";

const leaders=[
  ["01","Ada N.","4,820 pts","12 day streak"],
  ["02","Michael O.","4,510 pts","9 day streak"],
  ["03","Tola A.","4,120 pts","8 day streak"],
  ["04","Chidi K.","3,980 pts","7 day streak"],
  ["05","Amaka E.","3,770 pts","6 day streak"],
];

export default function Community(){return <><PublicNav/><main className="fo-community-page">
<section className="fo-community-hero"><Eyebrow>Fitness Option Community</Eyebrow><h1 className="fo-display">PROGRESS<br/>BECOMES <em>CONTAGIOUS.</em></h1><p className="fo-copy">Challenges, streaks, club milestones and shareable wins turn individual discipline into a community people want to belong to.</p><div className="fo-social-proof"><span><Users size={13}/> 1,842 active athletes</span><span><Flame size={13}/> 318 current streaks</span><span><Trophy size={13}/> 7 club challenges</span></div></section>
<section className="fo-section"><div className="fo-challenge-grid"><article className="fo-challenge-main"><span className="fo-pulse"><i/>LIVE CHALLENGE</span><h2>30 DAYS.<br/>300,000<br/>CLUB REPS.</h2><p className="fo-copy">Every logged rep moves the whole club forward. Hit the target together and everyone who contributed unlocks the Founders Recovery Week reward.</p><div className="fo-progress-track"><i/></div><strong>216,440 / 300,000 reps</strong><div style={{marginTop:"2rem"}}><Link className="v-cta" href="/vanta/app">Join from Member OS <ArrowUpRight size={16}/></Link></div></article><aside className="fo-challenge-side"><Eyebrow>Club leaderboard</Eyebrow>{leaders.map(x=><article key={x[0]}><span><b>{x[0]} · {x[1]}</b><small style={{display:"block",color:"#888",marginTop:4}}>{x[3]}</small></span><strong>{x[2]}</strong></article>)}</aside></div></section>
<section className="fo-section" style={{paddingTop:0}}><Eyebrow>Built to be shared</Eyebrow><h2 className="fo-display" style={{fontSize:"clamp(2.8rem,6vw,6.7rem)"}}>TURN EVERY WIN<br/>INTO <em>REACH.</em></h2><div className="fo-tech-grid"><article><Trophy/><div><h3>Shareable PR cards</h3><p>Members can turn new records, challenge wins and streaks into branded social cards.</p></div><small>Organic visibility</small></article><article><Users/><div><h3>Referral circles</h3><p>Members receive personal invite codes and track friends who join through them.</p></div><small>Growth loop</small></article><article><Flame/><div><h3>Streak identity</h3><p>Consistency becomes visible with levels, badges and club status without gimmicky gamification.</p></div><small>Retention</small></article><article><ArrowUpRight/><div><h3>Transformation stories</h3><p>Approved journeys can move from private progress tracking to polished public storytelling.</p></div><small>Social proof</small></article></div></section>
</main></>}
