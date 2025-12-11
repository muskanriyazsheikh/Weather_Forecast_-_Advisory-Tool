import React from "react";


function AdvisoryBox({ advisory }) {
return (
<div className="advisory-box">
<h2>🌱 Advisory</h2>
{advisory.map((item, index) => (
<p key={index}>• {item}</p>
))}
</div>
);
}


export default AdvisoryBox;