import React from 'react';
import childClass from './child.module.css'
export default function Child(){
	return (
		<div>
			<ul>
				<li className={childClass.item}>111</li>
				<li className={childClass.item}>222</li>
			</ul>
		</div>
	)
};