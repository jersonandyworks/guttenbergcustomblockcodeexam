/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { useBlockProps, RichText, Grid, Text } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import Team from "./components/Team";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

export default function save({ attributes }) {
	const { members } = attributes;
	console.log(members);

	const toggleDetails = () => {
		console.log("clicked!");
		// const updatedMembers = [...members];
		// updatedMembers[index].detailsOpened = !updatedMembers[index].detailsOpened;
	};

	const blockProps = useBlockProps.save();
	return (
		<>
			<div className="team-member-description">
				<label>Our Board</label>
				<h3>Our current Board Directors are:</h3>
				<p>
					The Board operates in accordance with a Board Charter and Rule Book
					which empowers them to make decisions concerning the strategic
					direction of the corporation.
				</p>
			</div>
			<p {...blockProps}>
				<div className="team-members-block">
					<div className="team-member">
						<Team members={members} index={0} />
						<Team members={members} index={1} />
						<Team members={members} index={2} />
						<Team members={members} index={3} />
						<Team members={members} index={4} />
						<Team members={members} index={5} />
					</div>
				</div>
			</p>
		</>
	);
}
