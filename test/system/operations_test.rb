require "application_system_test_case"

class OperationsTest < ApplicationSystemTestCase
  setup do
    @operation = operations(:one)
  end

  test "visiting the index" do
    visit operations_url
    assert_selector "h1", text: "Operations"
  end

  test "creating a Operation" do
    visit operations_url
    click_on "New Operation"

    fill_in "Asset", with: @operation.asset_id
    fill_in "Operated at", with: @operation.operated_at
    fill_in "Platform", with: @operation.platform
    fill_in "Price", with: @operation.price
    fill_in "Quantity", with: @operation.quantity
    fill_in "Tax", with: @operation.tax
    fill_in "Type", with: @operation.type
    click_on "Create Operation"

    assert_text "Operation was successfully created"
    click_on "Back"
  end

  test "updating a Operation" do
    visit operations_url
    click_on "Edit", match: :first

    fill_in "Asset", with: @operation.asset_id
    fill_in "Operated at", with: @operation.operated_at
    fill_in "Platform", with: @operation.platform
    fill_in "Price", with: @operation.price
    fill_in "Quantity", with: @operation.quantity
    fill_in "Tax", with: @operation.tax
    fill_in "Type", with: @operation.type
    click_on "Update Operation"

    assert_text "Operation was successfully updated"
    click_on "Back"
  end

  test "destroying a Operation" do
    visit operations_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Operation was successfully destroyed"
  end
end
