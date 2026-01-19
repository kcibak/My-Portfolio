import { useState } from 'preact/hooks';

type FormState = {
	name: string;
	email: string;
	message: string;
};

export default function ContactForm() {
	const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);
	const [isSubmitting, setSubmitting] = useState(false);

	const handleChange = (key: keyof FormState) =>
		(event: Event) => {
			const target = event.target as HTMLInputElement | HTMLTextAreaElement;
			setForm((prev) => ({ ...prev, [key]: target.value }));
		};

	const validate = () => {
		if (!form.name.trim()) return 'Please enter your name.';
		if (!form.email.includes('@')) return 'Please provide a valid email.';
		if (form.message.trim().length < 10) return 'Message should be at least 10 characters.';
		return null;
	};

	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		setError(null);
		setSuccess(null);
		const validation = validate();
		if (validation) {
			setError(validation);
			return;
		}
		setSubmitting(true);
		// TODO: Replace with your real endpoint or email service
		await new Promise((resolve) => setTimeout(resolve, 800));
		setSubmitting(false);
		setSuccess('Thanks! This is a placeholder. Wire this to your API or email service.');
		setForm({ name: '', email: '', message: '' });
	};

	return (
		<form class="card contact-form" onSubmit={handleSubmit}>
			<h2>Send a message</h2>
			<p class="section-subtitle">This form runs as an Astro Island. Replace the submit handler with your backend.</p>
			<label>
				<span>Name</span>
				<input
					type="text"
					name="name"
					value={form.name}
					onInput={handleChange('name')}
					required
					placeholder="Your name"
				/>
			</label>
			<label>
				<span>Email</span>
				<input
					type="email"
					name="email"
					value={form.email}
					onInput={handleChange('email')}
					required
					placeholder="you@example.com"
				/>
			</label>
			<label>
				<span>Project details</span>
				<textarea
					name="message"
					value={form.message}
					onInput={handleChange('message')}
					rows={5}
					placeholder="Timeline, goals, and scope"
					required
				></textarea>
			</label>
			<div class="form-actions">
				<button class="button" type="submit" disabled={isSubmitting}>
					{isSubmitting ? 'Sending…' : 'Send message'}
				</button>
				<button
					type="button"
					class="button secondary"
					onClick={() => {
						setForm({ name: '', email: '', message: '' });
						setError(null);
						setSuccess(null);
					}}
				>
					Clear
				</button>
			</div>
			{error && <p class="form-alert error">{error}</p>}
			{success && <p class="form-alert success">{success}</p>}
		</form>
	);
}
