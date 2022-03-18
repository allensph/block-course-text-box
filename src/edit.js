import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';

import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text } = attributes;
	return (
		<>
			<BlockControls
				controls={[
					{
						title: 'Button 1',
						icon: 'admin-generic',
						isActive: true,
						//onClick: () => console.log("Button 1 Clicked")
					},
					{
						title: 'Button 2',
						icon: 'admin-collapse',
						//onClick: () => console.log("Button 2 Clicked")
					},
				]}
			>
				<ToolbarGroup>
					<ToolbarButton
						title="Align Left"
						icon="editor-alignleft"
						//onClick={() => console.log('Align Left')}
					/>
					<ToolbarButton
						title="Align center"
						icon="editor-aligncenter"
						//onClick={() => console.log('Align Center')}
					/>
					<ToolbarButton
						title="Align Right"
						icon="editor-alignright"
						//onClick={() => console.log('Align Right')}
					/>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				{...useBlockProps()}
				onChange={(value) => setAttributes({ text: value })}
				value={text}
				placeholder={__('Your text', 'text-box')}
				tagName="h4"
				allowedFormats={[]}
			/>
		</>
	);
}
