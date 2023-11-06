/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import React, { useState } from "react";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText,
	MediaUpload,
	InspectorControls,
} from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

import { PanelBody, TextControl } from "@wordpress/components";
import Member from "./components/Member";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { members } = attributes;

	const onUpdateInfo = (newValue, index) => {
		const updatedMembers = [...members];

		switch (index) {
			case 0:
				updatedMembers[0].memberOne.info = newValue;

				break;
			case 1:
				updatedMembers[1].memberTwo.info = newValue;

				break;
			case 2:
				updatedMembers[2].memberThree.info = newValue;

				break;
			case 3:
				updatedMembers[3].memberFour.info = newValue;

				break;
			case 4:
				updatedMembers[4].memberFive.info = newValue;

				break;
			case 5:
				updatedMembers[5].memberSix.info = newValue;

				break;
			default:
				break;
		}

		setAttributes({ members: updatedMembers });
	};

	const onUpdatePosition = (newValue, index) => {
		const updatedMembers = [...members];

		switch (index) {
			case 0:
				updatedMembers[0].memberOne.position = newValue;

				break;
			case 1:
				updatedMembers[1].memberTwo.position = newValue;

				break;
			case 2:
				updatedMembers[2].memberThree.position = newValue;

				break;
			case 3:
				updatedMembers[3].memberFour.position = newValue;

				break;
			case 4:
				updatedMembers[4].memberFive.position = newValue;

				break;
			case 5:
				updatedMembers[5].memberSix.position = newValue;

				break;
			default:
				break;
		}

		setAttributes({ members: updatedMembers });
	};

	// Function to update a member's name
	const onUpdateName = (newValue, index) => {
		const updatedMembers = [...members];

		switch (index) {
			case 0:
				updatedMembers[0].memberOne.name = newValue;

				break;
			case 1:
				updatedMembers[1].memberTwo.name = newValue;

				break;
			case 2:
				updatedMembers[2].memberThree.name = newValue;

				break;
			case 3:
				updatedMembers[3].memberFour.name = newValue;

				break;
			case 4:
				updatedMembers[4].memberFive.name = newValue;

				break;
			case 5:
				updatedMembers[5].memberSix.name = newValue;

				break;
			default:
				break;
		}

		setAttributes({ members: updatedMembers });
	};

	// Function to update a member's image URL
	const onUpdateImage = (media, index) => {
		const updatedMembers = [...members];

		switch (index) {
			case 0:
				updatedMembers[0].memberOne.imageUrl = media.url;

				break;
			case 1:
				updatedMembers[1].memberTwo.imageUrl = media.url;

				break;
			case 2:
				updatedMembers[2].memberThree.imageUrl = media.url;

				break;
			case 3:
				updatedMembers[3].memberFour.imageUrl = media.url;

				break;
			case 4:
				updatedMembers[4].memberFive.imageUrl = media.url;

				break;
			case 5:
				updatedMembers[5].memberSix.imageUrl = media.url;

				break;
			default:
				break;
		}
		setAttributes({ members: updatedMembers });
	};

	const blockProps = useBlockProps();
	// console.log(props.attributes.members[0].memberOne.imageUrl);
	return (
		<>
			<div className="team-member" {...blockProps}>
				<div className="team-members-block">
					{members.map((member, index) => (
						<Member
							key={index} // You should use a unique key for each member
							index={index}
							member={member}
							onUpdateImage={onUpdateImage}
							onUpdateName={onUpdateName}
							onUpdatePosition={onUpdatePosition}
							onUpdateInfo={onUpdateInfo}
						/>
					))}
				</div>
			</div>
		</>
	);
}
