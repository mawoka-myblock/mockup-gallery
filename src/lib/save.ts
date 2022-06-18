import { toPng } from 'html-to-image';

export const saveImage = async (main_container): Promise<void> => {
	const res = await toPng(main_container);
	const url = res;
	const a = document.createElement('a');
	a.style.display = 'none';
	a.href = url;
	// the filename you want
	a.download = 'mockup.png';
	document.body.appendChild(a);
	a.click();
	window.URL.revokeObjectURL(url);
};
