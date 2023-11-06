import { RichText } from "@wordpress/block-editor";
export default function Team(props) {
	const { members, index } = props;
	let nameValue = "";
	let positionValue = "";
	let imageValue = "";
	let infoValue = "";
	switch (index) {
		case 0:
			nameValue = members[index].memberOne.name;
			positionValue = members[index].memberOne.position;
			imageValue = members[index].memberOne.imageUrl;
			infoValue = members[index].memberOne.info;
			break;
		case 1:
			nameValue = members[index].memberTwo.name;
			positionValue = members[index].memberTwo.position;
			imageValue = members[index].memberTwo.imageUrl;
			infoValue = members[index].memberTwo.info;
			break;
		case 2:
			nameValue = members[index].memberThree.name;
			positionValue = members[index].memberThree.position;
			imageValue = members[index].memberThree.imageUrl;
			infoValue = members[index].memberThree.info;

			break;
		case 3:
			nameValue = members[index].memberFour.name;
			positionValue = members[index].memberFour.position;
			imageValue = members[index].memberFour.imageUrl;
			infoValue = members[index].memberFour.info;

			break;
		case 4:
			nameValue = members[index].memberFive.name;
			positionValue = members[index].memberFive.position;
			imageValue = members[index].memberFive.imageUrl;
			infoValue = members[index].memberFive.info;

			break;
		case 5:
			nameValue = members[index].memberSix.name;
			positionValue = members[index].memberSix.position;
			imageValue = members[index].memberSix.imageUrl;
			infoValue = members[index].memberSix.info;

			break;
		default:
			break;
	}
	return (
		<div className="team-member-item">
			<div className="team-member-profile-image">
				<img src={imageValue} alt="Profile Photo" />
			</div>
			<div className="team-member-details">
				<RichText.Content
					tagName="p"
					className="team-member-name"
					value={nameValue}
				/>
				<RichText.Content
					tagName="p"
					className="team-member-position"
					value={positionValue}
				/>

				<button
					data-id={index}
					className="show-button-detail"
					onClick={() => alert("Button clicked in saved content!")}
				>
					View Details
				</button>
				<div
					id={`profile--detail--${index}`}
					className="profile--details--info"
				>
					<RichText.Content
						tagName="p"
						className="team-member-info"
						value={infoValue}
					/>
				</div>
			</div>
		</div>
	);
}
