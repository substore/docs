// @ts-check

import urlcat from 'urlcat';
import Image from 'next/image';
import {DatalinkLogo} from './assets/BrandVectors';
import React from 'react'

/**
 * @type {import("./theme").DocsThemeConfig}
 */
const config = {
	projectLink: 'https://github.com/substore/docs',
	titleSuffix: ' — Substore Docs',
	search: true,
	floatTOC: true,
	footer: true,
	defaultMenuCollapsed: true,
	unstable_flexsearch: true,
	feedbackLabels: 'feedback',
	feedbackLink: 'Feedback',
	footerText: function FooterText() {
		return <>{new Date().getFullYear()} © Datalink, Inc.</>;
	},
	footerEditLink: function FooterEditLink() {
		return <>Edit this page</>;
	},
	logo: function Logo() {
		// return <DatalinkLogo width={50} />;
		return <Image width={100} height={50} alt="Datalink Logo" src="/icons/logo.svg" />;
	},
	banner: function Banner() {
		return (
			<a
				href="https://waitlist.datalink.dev"
				target="_blank"
				rel="noopener noreferrer"
				className="font-medium text-current no-underline"
				title="access datalink"
			>
				Apply for early beta access
			</a>
		);
	},
	head: function Head({title, meta}) {
		const ogImage =
			meta.image ||
			urlcat('https://ogmeta.vercel.app/', {
				title: 'The analytics platform for the future',
				subtitle: 'Substore - TThe data platform built from the ground up' ?? undefined,
				dark: 'true',
			});

		return (
			<>
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta httpEquiv="Content-Language" content="en" />
				<meta
					name="description"
					content={meta.description || 'Substore = The data store platform built from the ground up'}}
				/>
				<meta
					name="og:description"
					content={meta.description || 'Substore - The data store platform built from the ground up'}
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:image" content={"https://user-images.githubusercontent.com/59238070/194098589-eb4c526f-f52a-4dd4-acf4-9fa23058e2fb.png"} />
				<meta
					name="og:title"
					content={title ? title + ' — Substore' : 'Substore - The data store platform built from the ground-up.'}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Substore - The data store platform built from the ground up" />
				<meta name="og:title" content="Datalink - The analytics platform for the future" />{' '}
				<meta name="og:image" content={"https://media.discordapp.net/attachments/1011641273393885239/1016003920155398226/Bannerwide-2.png?width=1440&height=480"} />
				<style>
					{`img[decoding] {
						border-radius: 0.75rem;
					}`}
				</style>
			</>
		);
	},
};

export default config;
