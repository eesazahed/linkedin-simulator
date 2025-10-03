const aiPrompt = `
/no_think

Generate a satiricial LinkedIn shitpost. The topic will be given, but you must write it in the style of a 
LinkedIn influencer, alright?
Buzzwords include AI, SF, agentic AI, meta AI, nvidia, b2b SaaS, b2b sales, 
monthly active users, SF startup culture, comment your email to gain access 
to ____, lets connect, vibecoding, the market, the economy, CEO, hackathon, 
internship, dropout, resume, CS student, unemployment, HR, co-founder, equity

Don't use all those buzzwords, but make sure to use a few when they are relavent. 

LinkedIn Tech-Influencer Post Formula
1. Absurd Hook (mundane or extreme → exaggerated importance)

Start with something trivial, dramatic, or oddly personal.

Example patterns:

“I just [did something boring]. Here's what it taught me about [big startup concept].”

“Your [obvious fact] is probably wrong. Here's why.”

“I made a bet with [name drop]. If I lose, I [dramatic consequence].”

2. Over-personal Backstory (short, broken sentences)

Drop in casual context like you're telling a friend.

Keep it punchy, no polish.

Example:

“I had nothing planned. No idea how I'd pull this off.”

“Growing up, I judged everything on outcomes.”

3. Forced Insight / Framework (connect the random to the profound)

Stretch the story into a “lesson” about startups, career, or tech.

Often use bullet points or lists.

Example:

“Taking out the trash taught me:

Distribution matters.

Don't let waste pile up.

Timing is everything.”

4. Grander Expansion (make it universal)

Generalize the small thing into a bigger claim.

“Most startups fail, not because X, but because Y.”

“This isn't about trash, it's about leverage.”

5. Performative Vulnerability / Hustle Energy

Admit you don't have it figured out, but you're trying anyway.

“I don't know how I'll pull this off.”

“This mindset completely changed how I operate.”

6. Engagement Bait CTA

Push for comments, DMs, or shares.

Example patterns:

“If you're in [place], let's connect.”

“DM me if you want in.”

“What do you think?”

Use plaintext, no emojis, no em-dashes. Be creative and try to sound insufferable too (this is a satirical shitpost after all). Be short, snappy, and seperate your clauses with newlines. Use punctuation (no em dashes tho), but everything should be lowercase. Sound pretentious, and shitposty. act like your better then everyone else because your AI b2b SaaS generates $100m in ARR. Dont use slang or meme culture. Remember, youre a professional fella. CEO trillionare grindset hustler lifestyle and stuff.
Now, here is the topic you must work with to create your own LinkedIn post:

`;

const postIdeaTextArea = document.querySelector("#post-idea");
const generateBtn = document.querySelector("#generate-btn");
const generatedResponse = document.querySelector("#generated-response");

const generatePost = async () => {
  generatedResponse.innerText = "Generating post...";

  const res = await fetch("https://ai.hackclub.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: [
        {
          role: "user",
          content: `${aiPrompt} \n ${postIdeaTextArea.value}`,
        },
      ],
    }),
  });

  const data = await res.json();
  const aiResponse = data.choices[0].message.content
    .replace(/<think>[\s\S]*?<\/think>/, "")
    .trim();

  generatedResponse.innerText = aiResponse;
};

generateBtn.addEventListener("click", async () => await generatePost());
