export const formTemplate = `
  <form class="input-form" id="add-form">
    <h3>Отзыв:</h3>
    <input class="input-place" type="text" placeholder="Укажите ваше имя" name="place"><br><br>
    <input class="input-name" type="text" placeholder="Укажите место" name="author"><br><br>
    <textarea class="review-text" placeholder="Оставить отзыв" name="review"></textarea><br><br>
    <button class="btn" id="ad-btn">Добавить</button><br>
  </form>
`;

export const reviewTemplate = (review) => {
  return `
    <div class="review">
      <div><strong>${review.author}</strong> ${review.place}</div>
      <div>${review.reviewText}</div>
    </div>
  `;
};
