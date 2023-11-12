const questions = [
    // ... (unchanged array of questions) ...
    
    "What is period poverty?",
    "How does period poverty affect women and girls?",
    "What are the causes of period poverty?",
    "What are the consequences of not having access to menstrual products?",
    "How can we raise awareness about period poverty?",
    "Are there organizations that help combat period poverty?",
    "What are some initiatives to provide menstrual products to those in need?",
    "How can individuals contribute to ending period poverty?",
    "What are some government policies addressing period poverty?",
    "How can period poverty be reduced in developing countries?",
    "What is the economic impact of period poverty?",
    "What are the health risks associated with period poverty?",
    "Are there reusable menstrual product options for addressing period poverty?",
    "What resources are available for people experiencing period poverty?",
    "How can we break the stigma around menstruation and period poverty?"
];

const chatlogs = document.getElementById("chatlogs");
const userInput = document.getElementById("userInput");

function askQuestion() {
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    // Add user's question to chat logs
    appendMessage("User", userMessage);

    // Check if the user's question matches any predefined questions
    const matchingQuestion = questions.find(question =>
        question.toLowerCase().includes(userMessage.toLowerCase())
    );

    if (matchingQuestion) {
        // If there's a matching question, display the answer
        const response = getResponse(matchingQuestion);
        setTimeout(() => {
            appendMessage("Bot", response);
        }, 1000);
    } else {
        // If no matching question, display a generic response
        setTimeout(() => {
            appendMessage("Bot", "I'm sorry, I don't have an answer to that question.");
        }, 1000);
    }

    // Clear the user input field
    userInput.value = "";
}

function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-bubble", sender.toLowerCase());
    messageElement.textContent = message;
    chatlogs.appendChild(messageElement);
    chatlogs.scrollTop = chatlogs.scrollHeight;
}

function getResponse(question) {
    // ... (unchanged getResponse function) ...
    switch (question) {
        case "What is period poverty?":
            return "Period poverty refers to the lack of access to menstrual hygiene products, sanitation facilities, and education about menstruation. It affects individuals who cannot afford or access these essential items, often leading to health, social, and economic challenges.";

        case "How does period poverty affect women and girls?":
            return "Period poverty can have profound effects on the physical and mental health, education, and overall well-being of women and girls. It may lead to missed school or work, increased risk of infections, and a sense of shame or stigma.";

        case "What are the causes of period poverty?":
            return "Causes of period poverty include low income, high cost of menstrual products, lack of access to clean sanitation facilities, inadequate education about menstruation, and social stigma surrounding menstruation.";

        case "What are the consequences of not having access to menstrual products?":
            return "Not having access to menstrual products can result in health issues, missed school or work, social isolation, and emotional distress. It can also perpetuate gender inequality and limit opportunities for affected individuals.";

        case "How can we raise awareness about period poverty?":
            return "Raising awareness about period poverty involves educating communities, advocating for policy changes, and supporting organizations that address the issue. Sharing stories and experiences can help break the silence and stigma.";

        case "Are there organizations that help combat period poverty?":
            return "Yes, there are many organizations worldwide working to combat period poverty. Some examples include Days for Girls, The Pad Project, and Menstrual Hygiene Day. These organizations provide menstrual products, education, and support.";

        case "What are some initiatives to provide menstrual products to those in need?":
            return "Initiatives include distributing free or subsidized menstrual products in schools, community centers, and shelters. Some governments and organizations also run voucher programs to provide products to low-income individuals.";

        case "How can individuals contribute to ending period poverty?":
            return "Individuals can contribute by donating menstrual products, volunteering with organizations, advocating for policy changes, and destigmatizing menstruation through open conversations and support for those in need.";

        case "What are some government policies addressing period poverty?":
            return "Some governments have implemented policies to address period poverty, such as providing free menstrual products in schools and public facilities or eliminating taxes on menstrual products. Policy advocacy plays a crucial role in this area.";

        case "How can period poverty be reduced in developing countries?":
            return "Reducing period poverty in developing countries involves improving access to affordable menstrual products, sanitation facilities, and education. Collaboration between governments, NGOs, and local communities is key.";

        case "What is the economic impact of period poverty?":
            return "Period poverty can limit economic opportunities for affected individuals due to missed work or school. Addressing period poverty can contribute to economic empowerment and gender equality.";

        case "What are the health risks associated with period poverty?":
            return "Health risks include an increased likelihood of infections due to inadequate hygiene practices, as well as physical and emotional stress. Proper menstrual hygiene is essential for overall well-being.";

        case "Are there reusable menstrual product options for addressing period poverty?":
            return "Yes, reusable menstrual products like menstrual cups and cloth pads can be cost-effective and sustainable alternatives to disposable products, making them suitable for addressing period poverty.";

        case "What resources are available for people experiencing period poverty?":
            return "Resources may include local charities, shelters, and community centers that offer free menstrual products. Additionally, some governments provide support, and NGOs run initiatives to address period poverty.";

        case "How can we break the stigma around menstruation and period poverty?":
            return "Breaking the stigma involves open conversations about menstruation, educating communities, and challenging taboos. Media, schools, and advocacy can all contribute to changing perceptions.";
    }

}

// Event listener for the "Send" button
document.querySelector("button").addEventListener("click", askQuestion);

// Event listener for pressing "Enter" in the input field
userInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        askQuestion();
    }
});
