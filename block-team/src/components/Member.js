import { TextControl, TextareaControl } from "@wordpress/components";
import { MediaUpload } from "@wordpress/block-editor";
export default function Member(props) {
	const {
		index,
		member,
		onUpdateImage,
		onUpdateName,
		onUpdatePosition,
		onUpdateInfo,
	} = props;

	let nameValue = "";
	let positionValue = "";
	let imageValue = "";
	let infoValue = "";
	switch (index) {
		case 0:
			nameValue = member.memberOne.name;
			positionValue = member.memberOne.position;
			imageValue = member.memberOne.imageUrl;
			infoValue = member.memberOne.info;
			break;
		case 1:
			nameValue = member.memberTwo.name;
			positionValue = member.memberTwo.position;
			imageValue = member.memberTwo.imageUrl;
			infoValue = member.memberTwo.info;
			break;
		case 2:
			nameValue = member.memberThree.name;
			positionValue = member.memberThree.position;
			imageValue = member.memberThree.imageUrl;
			infoValue = member.memberThree.info;

			break;
		case 3:
			nameValue = member.memberFour.name;
			positionValue = member.memberFour.position;
			imageValue = member.memberFour.imageUrl;
			infoValue = member.memberFour.info;

			break;
		case 4:
			nameValue = member.memberFive.name;
			positionValue = member.memberFive.position;
			imageValue = member.memberFive.imageUrl;
			infoValue = member.memberFive.info;

			break;
		case 5:
			nameValue = member.memberSix.name;
			positionValue = member.memberSix.position;
			imageValue = member.memberSix.imageUrl;
			infoValue = member.memberSix.info;

			break;
		default:
			break;
	}
	console.log(nameValue);
	return (
		<>
			<div className="team-member">
				<div className="team-member-profile-image">
					<MediaUpload
						onSelect={(image) => onUpdateImage(image, index)}
						type="image"
						value={imageValue}
						render={({ open }) => (
							<div>
								<button className="button" onClick={open}>
									Upload Image
								</button>
							</div>
						)}
					/>
					<img src={imageValue} alt="Profile Photo" />
				</div>
				<div className="team-member-details">
					<label>Name:</label>
					<TextControl
						tagName="p"
						className="team-member-name"
						value={
							nameValue.default !== ""
								? nameValue.default
									? nameValue.default
									: nameValue
								: nameValue
						}
						onChange={(newValue) => onUpdateName(newValue, index)}
						placeholder="Enter Name"
					/>
					<label>Position:</label>
					<TextControl
						tagName="p"
						className="team-member-position"
						value={
							positionValue.default !== ""
								? positionValue.default
									? positionValue.default
									: positionValue
								: positionValue
						}
						onChange={(newValue) => onUpdatePosition(newValue, index)}
						placeholder="Enter Name"
					/>
					<label>Details:</label>
					<TextareaControl
						tagName="p"
						className="team-member-info"
						value={
							infoValue.default !== ""
								? infoValue.default
									? infoValue.default
									: infoValue
								: infoValue
						}
						onChange={(newValue) => onUpdateInfo(newValue, index)}
						placeholder="Enter Name"
					/>
				</div>
			</div>
		</>
	);
}
