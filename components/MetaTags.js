// @flow
import * as React from 'react';

export default ({ caseStudy, project }: MTProps) => (
	<React.Fragment>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta
			name="description"
			content={`${caseStudy ||
				'Full-stack JavaScript developer specializing in React, React Native and Node.js.'}`}
		/>
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content={project ? `Max Rovensky | ${project.name}` : 'Max Rovensky'} />
		<meta name="twitter:description" content={`${caseStudy || 'Full-stack JavaScript developer specializing in React, React Native and Node.js'}`} />
		<meta name="twitter:image" content={project ? `http://rdev.imgix.net/${project.image.replace('/static/', '')}?blend=${project.color.replace('#', '')}&balph=50&bm=normal&txt=Case%20Study:%20${project.name}&txtalign=center,middle&txtfont=Avenir-Light&txtsize=64&txtcolor=${project.color === '#fff' ? '2a2a2a' : 'fff'}&w=1024&h=512&fit=crop&crop=edges` : 'https://fivepointseven.com/static/preview-img.jpg'} />
		<meta name="twitter:creator" content="@MaxRovensky" />
		<meta name="twitter:site_name" content="Max Rovensky" />
		<meta property="og:title" content="Max Rovensky" />
		<meta
			property="og:description"
			content={`${caseStudy ||
				'Full-stack JavaScript web developer specializing in React, React Native and Node.js.'}`}
		/>
		<meta property="og:image" content={project ? `http://rdev.imgix.net/${project.image.replace('/static/', '')}?blend=${project.color.replace('#', '')}&balph=60&bm=normal&txt=Case%20Study:%20${project.name}&txtalign=center,middle&txtfont=Avenir-Light&txtsize=64&txtcolor=${project.color === '#fff' ? '4a4a4a' : 'fff'}&w=1024&h=512&fit=crop&crop=edges` : 'https://fivepointseven.com/static/preview-img.jpg'} />
		<meta property="og:locale" content="en_US" />
		<meta property="og:url" content="https://fivepointseven.com" />
		<meta name="msapplication-TileColor" content="#ffffff" />
		<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
		<link rel="apple-touch-icon" sizes="57x57" href="/static/favicons/apple-icon-57x57.png" />
		<link rel="apple-touch-icon" sizes="60x60" href="/static/favicons/apple-icon-60x60.png" />
		<link rel="apple-touch-icon" sizes="72x72" href="/static/favicons/apple-icon-72x72.png" />
		<link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-icon-76x76.png" />
		<link
			rel="apple-touch-icon"
			sizes="114x114"
			href="/static/favicons/apple-icon-114x114.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="120x120"
			href="/static/favicons/apple-icon-120x120.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="144x144"
			href="/static/favicons/apple-icon-144x144.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="152x152"
			href="/static/favicons/apple-icon-152x152.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href="/static/favicons/apple-icon-180x180.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="192x192"
			href="/static/favicons/android-icon-192x192.png"
		/>
		<link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="96x96" href="/static/favicons/favicon-96x96.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
		<link rel="shortcut icon" href="/static/favicons/favicon.ico" type="image/x-icon" />
		<link rel="icon" type="image/png" href="/static/favicons/apple-icon.png" />
		<link rel="manifest" href="/static/manifest.json" />
	</React.Fragment>
);
