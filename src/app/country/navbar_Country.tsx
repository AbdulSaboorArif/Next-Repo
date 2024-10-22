import Link from "next/link";
export default function country_name() {
  return (
    <div className="text-xl font-semibold font">
      <h1>Country List</h1>
    
    <Link href="/country/Pakistan" >Pakistan</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <Link href="/country/Japan" >Japan</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <Link href="/country/China" >China</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <Link href="/country/India">India</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <Link href="/country/Afghanistan" >Afghanistan</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
    
    </div>
  );
}