import Image from "next/image"
import { cn } from "~/lib/utils"


export const GlassyCard = (
	{ className, ...props }
) => {
	return (
		<div className={cn("card w-80 glass", className)}>
			<figure><Image src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" width={320} height={200} /></figure>
			<div className="card-body">
				<h2 className="card-title">Life hack</h2>
				<p>How to park your car at your garage?</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Learn now!</button>
				</div>
			</div>
		</div>)
}
