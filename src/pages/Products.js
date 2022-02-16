import articles from "../data/articles.json";
const Article = ({ data }) => {
	return (
		<div className="product">
			<img src={data.img} alt="Produkt z derenia" />
			<p>{data.description}</p>
		</div>
	);
};
const Products = () => {
	const article = articles.map((article) => (
		<Article key={article.id} data={article} />
	));
	return (
		<div className="products">
			<p>
				Od wielu lat poszukujemy dawnych przepisów dereniowych, adaptujemy je i
				próbujemy łączyć z różnymi smakami. W słoikach o pojemności 200 ml
				robimy: piwny cymes dereniowy, cymes dereniowy, dereń kiszony oraz cymes
				dereniowy z ksylitolem. Przetwory które wytwarzamy w gospodarstwie są
				sezonowe. Pracujemy nad tym aby były dostępne jak najdłużej ale prosimy
				o kontakt w celu zapytania o dostępność konkretnych produktów. Oto kilka
				z nich:
			</p>
			<section>{article}</section>
		</div>
	);
};

export default Products;
