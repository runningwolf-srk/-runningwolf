import Link from 'next/link';

export default function Page() {
  return (
    <div style={{background:'black',color:'white',minHeight:'100vh',padding:'100px 20px',textAlign:'center'}}>
      <h1 style={{fontSize:'60px',marginBottom:'20px'}}>HALL OF RELICS</h1>
      <p style={{marginBottom:'60px',color:'gray'}}>A cinematic worship mythology database</p>
      <div style={{maxWidth:'600px',margin:'0 auto'}}>
        <a href="/music/heaven-calling" style={{display:'block',padding:'30px',border:'1px solid #333',marginBottom:'20px',textDecoration:'none',color:'white'}}>
          <h2 style={{fontSize:'30px',margin:'0 0 10px 0'}}>Heaven Is Calling</h2>
          <p style={{color:'gray',margin:0}}>When every other voice falls silent, heaven still speaks.</p>
        </a>
        <a href="/music/iron-collide" style={{display:'block',padding:'30px',border:'1px solid #333',marginBottom:'20px',textDecoration:'none',color:'white'}}>
          <h2 style={{fontSize:'30px',margin:'0 0 10px 0'}}>Iron Collide</h2>
          <p style={{color:'gray',margin:0}}>Faith sharpened in the fire of resistance.</p>
        </a>
        <a href="/music/blood-of-cross" style={{display:'block',padding:'30px',border:'1px solid #333',marginBottom:'20px',textDecoration:'none',color:'white'}}>
          <h2 style={{fontSize:'30px',margin:'0 0 10px 0'}}>Blood of the Cross</h2>
          <p style={{color:'gray',margin:0}}>Mercy written in sacrifice. Hope carried through suffering.</p>
        </a>
      </div>
    </div>
  );
}
